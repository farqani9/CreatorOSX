'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS, API_ROUTES, TOAST_MESSAGES } from '@/lib/constants';
import type { Tables, TablesInsert, TablesUpdate } from '@/lib/supabase/types';
import { toast } from 'sonner';

type Contact = Tables<'contacts'>;
type ContactInsert = TablesInsert<'contacts'>;
type ContactUpdate = TablesUpdate<'contacts'>;

/**
 * Fetch all contacts with optional filters
 */
export function useContacts(filters?: {
  status?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: [QUERY_KEYS.CONTACTS, filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      
      if (filters?.status) {
        params.append('status', filters.status);
      }
      
      if (filters?.search) {
        params.append('search', filters.search);
      }

      const response = await fetch(`${API_ROUTES.CONTACTS}?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      return response.json() as Promise<Contact[]>;
    },
  });
}

/**
 * Fetch a single contact by ID
 */
export function useContact(id: string | null) {
  return useQuery({
    queryKey: [QUERY_KEYS.CONTACT, id],
    queryFn: async () => {
      if (!id) throw new Error('Contact ID is required');
      
      const response = await fetch(`${API_ROUTES.CONTACTS}/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Contact not found');
        }
        throw new Error('Failed to fetch contact');
      }
      
      return response.json() as Promise<Contact>;
    },
    enabled: !!id,
  });
}

/**
 * Create a new contact
 */
export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<ContactInsert, 'user_id'>) => {
      const response = await fetch(API_ROUTES.CONTACTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create contact');
      }

      return response.json() as Promise<Contact>;
    },
    onSuccess: (newContact) => {
      // Invalidate contacts list to refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACTS] });
      
      // Optionally add the new contact to the cache
      queryClient.setQueryData([QUERY_KEYS.CONTACT, newContact.id], newContact);
      
      toast.success(TOAST_MESSAGES.CONTACT_CREATED);
    },
    onError: (error: Error) => {
      toast.error(error.message || TOAST_MESSAGES.ERROR_GENERIC);
    },
  });
}

/**
 * Update an existing contact
 */
export function useUpdateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: ContactUpdate }) => {
      const response = await fetch(`${API_ROUTES.CONTACTS}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update contact');
      }

      return response.json() as Promise<Contact>;
    },
    onMutate: async ({ id, data }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.CONTACT, id] });

      // Snapshot previous value
      const previousContact = queryClient.getQueryData<Contact>([QUERY_KEYS.CONTACT, id]);

      // Optimistically update
      if (previousContact) {
        queryClient.setQueryData<Contact>(
          [QUERY_KEYS.CONTACT, id],
          { ...previousContact, ...data }
        );
      }

      return { previousContact };
    },
    onSuccess: (updatedContact) => {
      // Update the specific contact in cache
      queryClient.setQueryData([QUERY_KEYS.CONTACT, updatedContact.id], updatedContact);
      
      // Invalidate contacts list
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACTS] });
      
      toast.success(TOAST_MESSAGES.CONTACT_UPDATED);
    },
    onError: (error: Error, { id }, context) => {
      // Rollback on error
      if (context?.previousContact) {
        queryClient.setQueryData([QUERY_KEYS.CONTACT, id], context.previousContact);
      }
      
      toast.error(error.message || TOAST_MESSAGES.ERROR_GENERIC);
    },
    onSettled: (data, error, { id }) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACT, id] });
    },
  });
}

/**
 * Delete a contact
 */
export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${API_ROUTES.CONTACTS}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || error.details || 'Failed to delete contact');
      }

      return response.json();
    },
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: [QUERY_KEYS.CONTACT, deletedId] });
      
      // Invalidate contacts list
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACTS] });
      
      toast.success(TOAST_MESSAGES.CONTACT_DELETED);
    },
    onError: (error: Error) => {
      toast.error(error.message || TOAST_MESSAGES.ERROR_GENERIC);
    },
  });
}

