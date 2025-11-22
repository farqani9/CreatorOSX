export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type ContactStatus = 'NEW' | 'CONTACTED' | 'IN_DISCUSSION' | 'CLOSED';
export type DealStatus = 'NEGOTIATING' | 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'LOST';
export type ContentStatus = 'IDEA' | 'DRAFTING' | 'SCHEDULED' | 'POSTED';

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          brand: string | null;
          email: string | null;
          phone: string | null;
          platform: string | null;
          platform_handle: string | null;
          status: ContactStatus;
          tags: string[];
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          brand?: string | null;
          email?: string | null;
          phone?: string | null;
          platform?: string | null;
          platform_handle?: string | null;
          status?: ContactStatus;
          tags?: string[];
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          brand?: string | null;
          email?: string | null;
          phone?: string | null;
          platform?: string | null;
          platform_handle?: string | null;
          status?: ContactStatus;
          tags?: string[];
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      deals: {
        Row: {
          id: string;
          user_id: string;
          contact_id: string | null;
          title: string;
          brand: string;
          status: DealStatus;
          amount: number | null;
          currency: string | null;
          deliverables: string | null;
          due_date: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          contact_id?: string | null;
          title: string;
          brand: string;
          status?: DealStatus;
          amount?: number | null;
          currency?: string | null;
          deliverables?: string | null;
          due_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          contact_id?: string | null;
          title?: string;
          brand?: string;
          status?: DealStatus;
          amount?: number | null;
          currency?: string | null;
          deliverables?: string | null;
          due_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          contact_id: string | null;
          deal_id: string | null;
          title: string;
          description: string | null;
          due_date: string | null;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          contact_id?: string | null;
          deal_id?: string | null;
          title: string;
          description?: string | null;
          due_date?: string | null;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          contact_id?: string | null;
          deal_id?: string | null;
          title?: string;
          description?: string | null;
          due_date?: string | null;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      content_items: {
        Row: {
          id: string;
          user_id: string;
          deal_id: string | null;
          title: string;
          description: string | null;
          platform: string | null;
          status: ContentStatus;
          post_date: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          deal_id?: string | null;
          title: string;
          description?: string | null;
          platform?: string | null;
          status?: ContentStatus;
          post_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          deal_id?: string | null;
          title?: string;
          description?: string | null;
          platform?: string | null;
          status?: ContentStatus;
          post_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      notes: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          content: string | null;
          tags: string[];
          is_template: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          content?: string | null;
          tags?: string[];
          is_template?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          content?: string | null;
          tags?: string[];
          is_template?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      contact_status: ContactStatus;
      deal_status: DealStatus;
      content_status: ContentStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Helper types for common operations
export type Contact = Database['public']['Tables']['contacts']['Row'];
export type ContactInsert = Database['public']['Tables']['contacts']['Insert'];
export type ContactUpdate = Database['public']['Tables']['contacts']['Update'];

export type Deal = Database['public']['Tables']['deals']['Row'];
export type DealInsert = Database['public']['Tables']['deals']['Insert'];
export type DealUpdate = Database['public']['Tables']['deals']['Update'];

export type Task = Database['public']['Tables']['tasks']['Row'];
export type TaskInsert = Database['public']['Tables']['tasks']['Insert'];
export type TaskUpdate = Database['public']['Tables']['tasks']['Update'];

export type ContentItem = Database['public']['Tables']['content_items']['Row'];
export type ContentItemInsert = Database['public']['Tables']['content_items']['Insert'];
export type ContentItemUpdate = Database['public']['Tables']['content_items']['Update'];

export type Note = Database['public']['Tables']['notes']['Row'];
export type NoteInsert = Database['public']['Tables']['notes']['Insert'];
export type NoteUpdate = Database['public']['Tables']['notes']['Update'];

