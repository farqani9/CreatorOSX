'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CONTACT_STATUSES } from '@/lib/constants';
import type { Tables } from '@/lib/supabase/types';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Contact = Tables<'contacts'>;

interface ContactFormProps {
  contact?: Contact;
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export function ContactForm({
  contact,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: ContactFormProps) {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(contact?.tags || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contact
      ? {
          name: contact.name,
          brand: contact.brand || '',
          status: contact.status,
          tags: contact.tags || [],
          notes: contact.notes || '',
        }
      : {
          name: '',
          brand: '',
          status: 'New',
          tags: [],
          notes: '',
        },
  });

  const selectedStatus = watch('status');

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        const newTags = [...tags, newTag];
        setTags(newTags);
        setValue('tags', newTags);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setValue('tags', newTags);
  };

  const onSubmitForm = async (data: ContactFormData) => {
    await onSubmit({ ...data, tags });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-slate-900">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="John Doe"
          className="w-full"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Brand */}
      <div className="space-y-2">
        <Label htmlFor="brand" className="text-sm font-medium text-slate-900">
          Brand / Company
        </Label>
        <Input
          id="brand"
          {...register('brand')}
          placeholder="Acme Corp"
          className="w-full"
          disabled={isSubmitting}
        />
        {errors.brand && (
          <p className="text-sm text-red-600">{errors.brand.message}</p>
        )}
      </div>

      {/* Status */}
      <div className="space-y-2">
        <Label htmlFor="status" className="text-sm font-medium text-slate-900">
          Status <span className="text-red-500">*</span>
        </Label>
        <Select
          value={selectedStatus}
          onValueChange={(value) => setValue('status', value as any)}
          disabled={isSubmitting}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {CONTACT_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.status && (
          <p className="text-sm text-red-600">{errors.status.message}</p>
        )}
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label htmlFor="tags" className="text-sm font-medium text-slate-900">
          Tags
        </Label>
        <Input
          id="tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Press Enter to add tags"
          className="w-full"
          disabled={isSubmitting}
        />
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-50 text-slate-700 border-slate-200 flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-slate-400 hover:text-slate-600"
                  disabled={isSubmitting}
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-sm font-medium text-slate-900">
          Notes
        </Label>
        <Textarea
          id="notes"
          {...register('notes')}
          placeholder="Add any additional notes about this contact..."
          className="w-full min-h-[100px]"
          disabled={isSubmitting}
        />
        {errors.notes && (
          <p className="text-sm text-red-600">{errors.notes.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="px-6"
        >
          {isSubmitting ? 'Saving...' : contact ? 'Update Contact' : 'Create Contact'}
        </Button>
      </div>
    </form>
  );
}

