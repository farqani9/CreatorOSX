/**
 * Application Constants
 * 
 * Global constants used throughout the application.
 */

// ============================================================================
// App Configuration
// ============================================================================

export const APP_NAME = 'Creator OSX';
export const APP_DESCRIPTION = 'Your all-in-one Creator CRM & Ops System';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// ============================================================================
// Contact Statuses
// ============================================================================

export const CONTACT_STATUSES = [
  { value: 'New', label: 'New', color: 'blue' },
  { value: 'Contacted', label: 'Contacted', color: 'yellow' },
  { value: 'In Discussion', label: 'In Discussion', color: 'orange' },
  { value: 'Closed', label: 'Closed', color: 'green' },
] as const;

export type ContactStatus = typeof CONTACT_STATUSES[number]['value'];

// ============================================================================
// Deal Statuses
// ============================================================================

export const DEAL_STATUSES = [
  { value: 'Negotiating', label: 'Negotiating', color: 'blue' },
  { value: 'Pending', label: 'Pending', color: 'yellow' },
  { value: 'Active', label: 'Active', color: 'purple' },
  { value: 'Completed', label: 'Completed', color: 'green' },
  { value: 'Lost', label: 'Lost', color: 'red' },
] as const;

export type DealStatus = typeof DEAL_STATUSES[number]['value'];

// ============================================================================
// Content Statuses
// ============================================================================

export const CONTENT_STATUSES = [
  { value: 'Idea', label: 'Idea', color: 'gray' },
  { value: 'Drafting', label: 'Drafting', color: 'blue' },
  { value: 'Scheduled', label: 'Scheduled', color: 'yellow' },
  { value: 'Posted', label: 'Posted', color: 'green' },
] as const;

export type ContentStatus = typeof CONTENT_STATUSES[number]['value'];

// ============================================================================
// Social Media Platforms
// ============================================================================

export const PLATFORMS = [
  { value: 'instagram', label: 'Instagram', icon: '📷' },
  { value: 'tiktok', label: 'TikTok', icon: '🎵' },
  { value: 'youtube', label: 'YouTube', icon: '📺' },
  { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { value: 'twitter', label: 'Twitter', icon: '🐦' },
  { value: 'facebook', label: 'Facebook', icon: '👍' },
  { value: 'other', label: 'Other', icon: '🌐' },
] as const;

// ============================================================================
// Currencies
// ============================================================================

export const CURRENCIES = [
  { value: 'USD', label: 'USD ($)', symbol: '$' },
  { value: 'EUR', label: 'EUR (€)', symbol: '€' },
  { value: 'GBP', label: 'GBP (£)', symbol: '£' },
  { value: 'JPY', label: 'JPY (¥)', symbol: '¥' },
  { value: 'CAD', label: 'CAD ($)', symbol: 'C$' },
  { value: 'AUD', label: 'AUD ($)', symbol: 'A$' },
] as const;

// ============================================================================
// Navigation Items
// ============================================================================

export const NAVIGATION_ITEMS = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    name: 'Contacts',
    href: '/dashboard/contacts',
    icon: 'Users',
  },
  {
    name: 'Deals',
    href: '/dashboard/deals',
    icon: 'Briefcase',
  },
  {
    name: 'Tasks',
    href: '/dashboard/tasks',
    icon: 'CheckSquare',
  },
  {
    name: 'Calendar',
    href: '/dashboard/calendar',
    icon: 'Calendar',
  },
  {
    name: 'Notes',
    href: '/dashboard/notes',
    icon: 'FileText',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: 'Settings',
  },
] as const;

// ============================================================================
// Pagination
// ============================================================================

export const DEFAULT_PAGE_SIZE = 20;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// ============================================================================
// Date Formats
// ============================================================================

export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy HH:mm';
export const TIME_FORMAT = 'HH:mm';

// ============================================================================
// Validation Limits
// ============================================================================

export const LIMITS = {
  CONTACT_NAME_MAX: 100,
  CONTACT_NOTES_MAX: 2000,
  DEAL_TITLE_MAX: 200,
  DEAL_AMOUNT_MAX: 1000000,
  DEAL_NOTES_MAX: 2000,
  TASK_TITLE_MAX: 200,
  TASK_DESCRIPTION_MAX: 1000,
  CONTENT_TITLE_MAX: 200,
  CONTENT_DESCRIPTION_MAX: 1000,
  NOTE_TITLE_MAX: 200,
  NOTE_CONTENT_MAX: 50000,
  TAG_MAX: 50,
  TAGS_MAX_COUNT: 20,
} as const;

// ============================================================================
// Feature Flags
// ============================================================================

export const FEATURES = {
  GOOGLE_OAUTH: true,
  EMAIL_NOTIFICATIONS: false, // Coming soon
  FILE_ATTACHMENTS: false,    // Coming soon
  INTEGRATIONS: false,         // Coming soon
  ANALYTICS: false,            // Coming soon
  EXPORT_DATA: false,          // Coming soon
} as const;

// ============================================================================
// API Endpoints
// ============================================================================

export const API_ROUTES = {
  CONTACTS: '/api/contacts',
  DEALS: '/api/deals',
  TASKS: '/api/tasks',
  CONTENT: '/api/content',
  NOTES: '/api/notes',
  AUTH: '/api/auth',
} as const;

// ============================================================================
// Toast Messages
// ============================================================================

export const TOAST_MESSAGES = {
  // Contact messages
  CONTACT_CREATED: 'Contact created successfully',
  CONTACT_UPDATED: 'Contact updated successfully',
  CONTACT_DELETED: 'Contact deleted successfully',
  
  // Deal messages
  DEAL_CREATED: 'Deal created successfully',
  DEAL_UPDATED: 'Deal updated successfully',
  DEAL_DELETED: 'Deal deleted successfully',
  
  // Task messages
  TASK_CREATED: 'Task created successfully',
  TASK_UPDATED: 'Task updated successfully',
  TASK_DELETED: 'Task deleted successfully',
  TASK_COMPLETED: 'Task marked as completed',
  
  // Content messages
  CONTENT_CREATED: 'Content item created successfully',
  CONTENT_UPDATED: 'Content item updated successfully',
  CONTENT_DELETED: 'Content item deleted successfully',
  
  // Note messages
  NOTE_CREATED: 'Note created successfully',
  NOTE_UPDATED: 'Note updated successfully',
  NOTE_DELETED: 'Note deleted successfully',
  
  // General messages
  COPIED_TO_CLIPBOARD: 'Copied to clipboard',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
  ERROR_NETWORK: 'Network error. Please check your connection.',
} as const;

// ============================================================================
// Query Keys (for React Query)
// ============================================================================

export const QUERY_KEYS = {
  CONTACTS: 'contacts',
  CONTACT: 'contact',
  DEALS: 'deals',
  DEAL: 'deal',
  TASKS: 'tasks',
  TASK: 'task',
  CONTENT: 'content',
  CONTENT_ITEM: 'content-item',
  NOTES: 'notes',
  NOTE: 'note',
  USER: 'user',
  DASHBOARD_STATS: 'dashboard-stats',
} as const;

// ============================================================================
// Local Storage Keys
// ============================================================================

export const STORAGE_KEYS = {
  THEME: 'creator-osx-theme',
  SIDEBAR_STATE: 'creator-osx-sidebar',
  VIEW_MODE: 'creator-osx-view-mode',
  ONBOARDING_COMPLETE: 'creator-osx-onboarding',
} as const;

