'use client';

import { useContact, useDeleteContact } from '@/lib/hooks/use-contacts';
import { ContactStatusBadge } from '@/components/contacts/contact-status-badge';
import { ContactDialog } from '@/components/contacts/contact-dialog';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Building2,
  Tag,
  Calendar,
  FileText,
  TrendingUp,
  Loader2,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { formatDate, getInitials } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: contact, isLoading, error } = useContact(params.id);
  const deleteContact = useDeleteContact();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = async () => {
    await deleteContact.mutateAsync(params.id);
    router.push('/dashboard/contacts');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-500" />
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Not Found</h2>
          <p className="text-slate-600 mb-6">
            The contact you're looking for doesn't exist or you don't have access to it.
          </p>
          <Button onClick={() => router.push('/dashboard/contacts')}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Contacts
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push('/dashboard/contacts')}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Contacts
          </Button>

          <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {getInitials(contact.name)}
                </div>

                {/* Info */}
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {contact.name}
                  </h1>
                  {contact.brand && (
                    <p className="text-lg text-slate-600 flex items-center gap-2">
                      <Building2 size={18} />
                      {contact.brand}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-3">
                    <ContactStatusBadge status={contact.status} />
                    <span className="text-sm text-slate-500">
                      Added {formatDate(contact.created_at, 'long')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setEditDialogOpen(true)}
                >
                  <Pencil size={16} className="mr-2" />
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setDeleteDialogOpen(true)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </Button>
              </div>
            </div>

            {/* Tags */}
            {contact.tags && contact.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-100">
                <Tag size={16} className="text-slate-400" />
                <div className="flex flex-wrap gap-2">
                  {contact.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-slate-50 text-slate-700 border-slate-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Notes */}
            {contact.notes && (
              <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={20} className="text-slate-400" />
                  <h2 className="text-lg font-semibold text-slate-900">Notes</h2>
                </div>
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {contact.notes}
                </p>
              </div>
            )}

            {/* Activity Timeline - Placeholder */}
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={20} className="text-slate-400" />
                <h2 className="text-lg font-semibold text-slate-900">Activity</h2>
              </div>
              <div className="text-center py-8">
                <p className="text-sm text-slate-500">
                  Activity tracking coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={() => router.push(`/dashboard/deals/new?contactId=${contact.id}`)}
                >
                  <TrendingUp size={16} className="mr-2" />
                  Convert to Deal
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Details
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Status</dt>
                  <dd>
                    <ContactStatusBadge status={contact.status} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Created</dt>
                  <dd className="text-sm text-slate-900">
                    {formatDate(contact.created_at, 'long')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 mb-1">Last Updated</dt>
                  <dd className="text-sm text-slate-900">
                    {formatDate(contact.updated_at, 'long')}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Edit Dialog */}
        <ContactDialog
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          contact={contact}
        />

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Contact</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete {contact.name}? This action cannot be undone.
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
                onClick={handleDelete}
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

