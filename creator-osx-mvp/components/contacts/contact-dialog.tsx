'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ContactForm } from './contact-form';
import { useCreateContact, useUpdateContact } from '@/lib/hooks/use-contacts';
import type { ContactFormData } from '@/lib/validations';
import type { Tables } from '@/lib/supabase/types';

type Contact = Tables<'contacts'>;

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact?: Contact | null;
}

export function ContactDialog({
  open,
  onOpenChange,
  contact,
}: ContactDialogProps) {
  const createContact = useCreateContact();
  const updateContact = useUpdateContact();

  const handleSubmit = async (data: ContactFormData) => {
    if (contact) {
      // Update existing contact
      await updateContact.mutateAsync({
        id: contact.id,
        data,
      });
    } else {
      // Create new contact
      await createContact.mutateAsync(data);
    }
    onOpenChange(false);
  };

  const isSubmitting = createContact.isPending || updateContact.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {contact ? 'Edit Contact' : 'Create New Contact'}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm
            contact={contact || undefined}
            onSubmit={handleSubmit}
            onCancel={() => onOpenChange(false)}
            isSubmitting={isSubmitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

