import { z } from 'zod';

/**
 * Validation Schemas for Creator OSX MVP
 * 
 * All form validation schemas using Zod.
 * Used with React Hook Form for type-safe form handling.
 */

// ============================================================================
// Contact Validation Schema
// ============================================================================

export const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  
  brand: z.string()
    .max(100, 'Brand name must be less than 100 characters')
    .optional()
    .nullable(),
  
  status: z.enum(['New', 'Contacted', 'In Discussion', 'Closed'], {
    required_error: 'Status is required',
  }),
  
  tags: z.array(z.string())
    .default([]),
  
  notes: z.string()
    .max(2000, 'Notes must be less than 2000 characters')
    .optional()
    .nullable(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// ============================================================================
// Deal Validation Schema
// ============================================================================

export const dealSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters'),
  
  brand: z.string()
    .min(1, 'Brand is required')
    .max(100, 'Brand must be less than 100 characters'),
  
  status: z.enum(['Negotiating', 'Pending', 'Active', 'Completed', 'Lost'], {
    required_error: 'Status is required',
  }),
  
  amount: z.number()
    .min(0, 'Amount must be positive')
    .max(1000000, 'Amount must be less than $1,000,000')
    .nullable()
    .optional(),
  
  currency: z.string()
    .length(3, 'Currency must be 3 characters (e.g., USD)')
    .default('USD'),
  
  deliverables: z.string()
    .max(1000, 'Deliverables must be less than 1000 characters')
    .optional()
    .nullable(),
  
  due_date: z.string()
    .datetime()
    .nullable()
    .optional(),
  
  contact_id: z.string()
    .uuid('Invalid contact ID')
    .nullable()
    .optional(),
  
  notes: z.string()
    .max(2000, 'Notes must be less than 2000 characters')
    .optional()
    .nullable(),
});

export type DealFormData = z.infer<typeof dealSchema>;

// ============================================================================
// Task Validation Schema
// ============================================================================

export const taskSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters'),
  
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional()
    .nullable(),
  
  due_date: z.string()
    .datetime()
    .nullable()
    .optional(),
  
  completed: z.boolean()
    .default(false),
  
  contact_id: z.string()
    .uuid('Invalid contact ID')
    .nullable()
    .optional(),
  
  deal_id: z.string()
    .uuid('Invalid deal ID')
    .nullable()
    .optional(),
});

export type TaskFormData = z.infer<typeof taskSchema>;

// ============================================================================
// Content Item Validation Schema
// ============================================================================

export const contentItemSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters'),
  
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional()
    .nullable(),
  
  platform: z.string()
    .max(50, 'Platform must be less than 50 characters')
    .optional()
    .nullable(),
  
  status: z.enum(['Idea', 'Drafting', 'Scheduled', 'Posted'], {
    required_error: 'Status is required',
  }),
  
  scheduled_date: z.string()
    .datetime()
    .nullable()
    .optional(),
  
  posted_date: z.string()
    .datetime()
    .nullable()
    .optional(),
  
  deal_id: z.string()
    .uuid('Invalid deal ID')
    .nullable()
    .optional(),
});

export type ContentItemFormData = z.infer<typeof contentItemSchema>;

// ============================================================================
// Note Validation Schema
// ============================================================================

export const noteSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters'),
  
  content: z.string()
    .max(50000, 'Content must be less than 50000 characters')
    .optional()
    .nullable(),
  
  tags: z.array(z.string())
    .default([]),
  
  is_template: z.boolean()
    .default(false),
});

export type NoteFormData = z.infer<typeof noteSchema>;

// ============================================================================
// Auth Validation Schemas
// ============================================================================

export const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signupSchema = loginSchema.extend({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  
  confirmPassword: z.string()
    .min(8, 'Password must be at least 8 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type SignupFormData = z.infer<typeof signupSchema>;

// ============================================================================
// Settings Validation Schemas
// ============================================================================

export const profileSettingsSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  
  email: z.string()
    .email('Invalid email address'),
});

export type ProfileSettingsFormData = z.infer<typeof profileSettingsSchema>;

export const notificationSettingsSchema = z.object({
  email_notifications: z.boolean().default(true),
  task_reminders: z.boolean().default(true),
  deal_updates: z.boolean().default(true),
  content_reminders: z.boolean().default(false),
});

export type NotificationSettingsFormData = z.infer<typeof notificationSettingsSchema>;

// ============================================================================
// Search & Filter Schemas
// ============================================================================

export const contactFilterSchema = z.object({
  status: z.enum(['New', 'Contacted', 'In Discussion', 'Closed']).optional(),
  search: z.string().max(100).optional(),
  tags: z.array(z.string()).optional(),
});

export type ContactFilterData = z.infer<typeof contactFilterSchema>;

export const dealFilterSchema = z.object({
  status: z.enum(['Negotiating', 'Pending', 'Active', 'Completed', 'Lost']).optional(),
  contact_id: z.string().uuid().optional(),
  min_amount: z.number().min(0).optional(),
  max_amount: z.number().min(0).optional(),
});

export type DealFilterData = z.infer<typeof dealFilterSchema>;

export const taskFilterSchema = z.object({
  completed: z.boolean().optional(),
  contact_id: z.string().uuid().optional(),
  deal_id: z.string().uuid().optional(),
  due_before: z.string().datetime().optional(),
  due_after: z.string().datetime().optional(),
});

export type TaskFilterData = z.infer<typeof taskFilterSchema>;

