import { create } from 'zustand';

/**
 * Filter Store
 * 
 * Manages filter state for contacts, deals, tasks, etc.
 * Allows users to filter and search data across the app.
 */

interface ContactFilters {
  status?: 'New' | 'Contacted' | 'In Discussion' | 'Closed';
  search?: string;
  tags?: string[];
}

interface DealFilters {
  status?: 'Negotiating' | 'Pending' | 'Active' | 'Completed' | 'Lost';
  contactId?: string;
  minAmount?: number;
  maxAmount?: number;
}

interface TaskFilters {
  completed?: boolean;
  contactId?: string;
  dealId?: string;
  dueBefore?: string;
  dueAfter?: string;
}

interface ContentFilters {
  status?: 'Idea' | 'Drafting' | 'Scheduled' | 'Posted';
  dealId?: string;
  platform?: string;
}

interface NoteFilters {
  search?: string;
  tags?: string[];
  isTemplate?: boolean;
}

interface FilterStore {
  // Contact Filters
  contactFilters: ContactFilters;
  setContactFilters: (filters: ContactFilters) => void;
  resetContactFilters: () => void;
  
  // Deal Filters
  dealFilters: DealFilters;
  setDealFilters: (filters: DealFilters) => void;
  resetDealFilters: () => void;
  
  // Task Filters
  taskFilters: TaskFilters;
  setTaskFilters: (filters: TaskFilters) => void;
  resetTaskFilters: () => void;
  
  // Content Filters
  contentFilters: ContentFilters;
  setContentFilters: (filters: ContentFilters) => void;
  resetContentFilters: () => void;
  
  // Note Filters
  noteFilters: NoteFilters;
  setNoteFilters: (filters: NoteFilters) => void;
  resetNoteFilters: () => void;
  
  // Global Search
  globalSearch: string;
  setGlobalSearch: (search: string) => void;
  clearGlobalSearch: () => void;
}

const defaultContactFilters: ContactFilters = {};
const defaultDealFilters: DealFilters = {};
const defaultTaskFilters: TaskFilters = {};
const defaultContentFilters: ContentFilters = {};
const defaultNoteFilters: NoteFilters = {};

export const useFilterStore = create<FilterStore>((set) => ({
  // Contact Filters
  contactFilters: defaultContactFilters,
  setContactFilters: (filters) => set({ contactFilters: filters }),
  resetContactFilters: () => set({ contactFilters: defaultContactFilters }),
  
  // Deal Filters
  dealFilters: defaultDealFilters,
  setDealFilters: (filters) => set({ dealFilters: filters }),
  resetDealFilters: () => set({ dealFilters: defaultDealFilters }),
  
  // Task Filters
  taskFilters: defaultTaskFilters,
  setTaskFilters: (filters) => set({ taskFilters: filters }),
  resetTaskFilters: () => set({ taskFilters: defaultTaskFilters }),
  
  // Content Filters
  contentFilters: defaultContentFilters,
  setContentFilters: (filters) => set({ contentFilters: filters }),
  resetContentFilters: () => set({ contentFilters: defaultContentFilters }),
  
  // Note Filters
  noteFilters: defaultNoteFilters,
  setNoteFilters: (filters) => set({ noteFilters: filters }),
  resetNoteFilters: () => set({ noteFilters: defaultNoteFilters }),
  
  // Global Search
  globalSearch: '',
  setGlobalSearch: (search) => set({ globalSearch: search }),
  clearGlobalSearch: () => set({ globalSearch: '' }),
}));

