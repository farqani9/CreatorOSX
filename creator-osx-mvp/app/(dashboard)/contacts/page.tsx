'use client';

import { useState } from 'react';
import { useContacts, useDeleteContact } from '@/lib/hooks/use-contacts';
import { ContactList } from '@/components/contacts/contact-list';
import { ContactDialog } from '@/components/contacts/contact-dialog';
import { ContactsFilters } from '@/components/contacts/contacts-filters';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import type { Tables } from '@/lib/supabase/types';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Contact = Tables<'contacts'>;

export default function ContactsPage() {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

  // Fetch contacts with filters
  const { data: contacts = [], isLoading } = useContacts({
    status: selectedStatus,
    search: searchQuery,
  });

  const deleteContact = useDeleteContact();

  const handleCreateContact = () => {
    setEditingContact(null);
    setDialogOpen(true);
  };

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact);
    setDialogOpen(true);
  };

  const handleDeleteClick = (contact: Contact) => {
    setContactToDelete(contact);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (contactToDelete) {
      await deleteContact.mutateAsync(contactToDelete.id);
      setDeleteDialogOpen(false);
      setContactToDelete(null);
    }
  };

  const handleContactClick = (contact: Contact) => {
    router.push(`/dashboard/contacts/${contact.id}`);
  };

  const handleConvertToDeal = (contact: Contact) => {
    // Navigate to deals page with pre-filled contact
    router.push(`/dashboard/deals/new?contactId=${contact.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Contacts</h1>
            <p className="text-slate-600 mt-1">
              Manage your leads and professional relationships
            </p>
          </div>
          <Button
            onClick={handleCreateContact}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add Contact
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <ContactsFilters
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="text-xs text-slate-500 mb-1">Total Contacts</div>
            <div className="text-2xl font-bold text-slate-800">{contacts.length}</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="text-xs text-slate-500 mb-1">New</div>
            <div className="text-2xl font-bold text-blue-600">
              {contacts.filter((c) => c.status === 'New').length}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="text-xs text-slate-500 mb-1">In Discussion</div>
            <div className="text-2xl font-bold text-orange-600">
              {contacts.filter((c) => c.status === 'In Discussion').length}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="text-xs text-slate-500 mb-1">Closed</div>
            <div className="text-2xl font-bold text-green-600">
              {contacts.filter((c) => c.status === 'Closed').length}
            </div>
          </div>
        </div>

        {/* Contact List */}
        <ContactList
          contacts={contacts}
          isLoading={isLoading}
          onEdit={handleEditContact}
          onDelete={handleDeleteClick}
          onConvertToDeal={handleConvertToDeal}
          onContactClick={handleContactClick}
        />

        {/* Create/Edit Dialog */}
        <ContactDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          contact={editingContact}
        />

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Contact</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete {contactToDelete?.name}? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="secondary"
                onClick={() => setDeleteDialogOpen(false)}
                disabled={deleteContact.isPending}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleConfirmDelete}
                disabled={deleteContact.isPending}
                className="bg-red-600 hover:bg-red-700"
              >
                {deleteContact.isPending ? 'Deleting...' : 'Delete'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

