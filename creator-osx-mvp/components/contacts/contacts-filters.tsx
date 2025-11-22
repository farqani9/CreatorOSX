'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { CONTACT_STATUSES } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

interface ContactsFiltersProps {
  selectedStatus?: string;
  onStatusChange: (status?: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ContactsFilters({
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
}: ContactsFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <Input
          placeholder="Search by name or brand..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Status Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onStatusChange(undefined)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !selectedStatus
              ? 'bg-brand-500 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Contacts
        </button>
        {CONTACT_STATUSES.map((status) => {
          const isSelected = selectedStatus === status.value;
          const colorClasses = {
            blue: 'bg-blue-50 text-blue-700 border-blue-200',
            yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            orange: 'bg-orange-50 text-orange-700 border-orange-200',
            green: 'bg-green-50 text-green-700 border-green-200',
          };

          return (
            <button
              key={status.value}
              onClick={() => onStatusChange(status.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                isSelected
                  ? colorClasses[status.color as keyof typeof colorClasses]
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {status.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

