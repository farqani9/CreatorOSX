import { Badge } from '@/components/ui/badge';
import { ContactStatusBadge } from './contact-status-badge';
import { Button } from '@/components/ui/Button';
import { MoreHorizontal, Mail, Building2, Tag } from 'lucide-react';
import type { Tables } from '@/lib/supabase/types';
import { formatDate, getInitials } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Contact = Tables<'contacts'>;

interface ContactCardProps {
  contact: Contact;
  onEdit?: () => void;
  onDelete?: () => void;
  onConvertToDeal?: () => void;
  onClick?: () => void;
}

export function ContactCard({
  contact,
  onEdit,
  onDelete,
  onConvertToDeal,
  onClick,
}: ContactCardProps) {
  return (
    <div
      className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:border-slate-200 transition-colors cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 flex-1">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {getInitials(contact.name)}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 truncate">
              {contact.name}
            </h3>
            {contact.brand && (
              <p className="text-sm text-slate-600 flex items-center gap-1 mt-0.5">
                <Building2 size={14} />
                {contact.brand}
              </p>
            )}
          </div>
        </div>

        {/* Actions Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mr-2"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {onEdit && (
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}>
                Edit
              </DropdownMenuItem>
            )}
            {onConvertToDeal && (
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onConvertToDeal();
              }}>
                Convert to Deal
              </DropdownMenuItem>
            )}
            {onDelete && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 focus:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Status and Tags */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <ContactStatusBadge status={contact.status} />

        {contact.tags && contact.tags.length > 0 && (
          <>
            {contact.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-50 text-slate-700 border-slate-200"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </Badge>
            ))}
            {contact.tags.length > 2 && (
              <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                +{contact.tags.length - 2}
              </Badge>
            )}
          </>
        )}
      </div>

      {/* Notes Preview */}
      {contact.notes && (
        <p className="text-sm text-slate-500 mt-3 line-clamp-2">
          {contact.notes}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Added {formatDate(contact.created_at, 'relative')}
        </span>
      </div>
    </div>
  );
}

