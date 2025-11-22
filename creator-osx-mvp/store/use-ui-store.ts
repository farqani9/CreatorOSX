import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * UI Store
 * 
 * Manages UI state across the application.
 * Persisted to localStorage for user preferences.
 */

type Theme = 'light' | 'dark' | 'system';
type View = 'grid' | 'list' | 'kanban';

interface UIStore {
  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Sidebar
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  
  // Mobile Menu
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  
  // View Mode (for contacts, deals, etc.)
  viewMode: View;
  setViewMode: (mode: View) => void;
  
  // Notifications
  notificationsOpen: boolean;
  toggleNotifications: () => void;
  setNotificationsOpen: (open: boolean) => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      // Theme
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      
      // Sidebar
      sidebarOpen: true,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      // Mobile Menu
      mobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      
      // View Mode
      viewMode: 'grid',
      setViewMode: (mode) => set({ viewMode: mode }),
      
      // Notifications
      notificationsOpen: false,
      toggleNotifications: () => set((state) => ({ notificationsOpen: !state.notificationsOpen })),
      setNotificationsOpen: (open) => set({ notificationsOpen: open }),
    }),
    {
      name: 'creator-osx-ui-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist theme, sidebar, and viewMode
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
        viewMode: state.viewMode,
      }),
    }
  )
);

