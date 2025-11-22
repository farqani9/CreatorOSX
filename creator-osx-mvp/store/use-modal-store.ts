import { create } from 'zustand';

/**
 * Modal Store
 * 
 * Manages modal state across the application.
 * Handles opening/closing modals and passing data to modals.
 */

export type ModalType =
  | 'createContact'
  | 'editContact'
  | 'deleteContact'
  | 'createDeal'
  | 'editDeal'
  | 'deleteDeal'
  | 'createTask'
  | 'editTask'
  | 'deleteTask'
  | 'createContent'
  | 'editContent'
  | 'deleteContent'
  | 'createNote'
  | 'editNote'
  | 'deleteNote';

interface ModalData {
  contact?: any;
  deal?: any;
  task?: any;
  content?: any;
  note?: any;
  [key: string]: any;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false, data: {} }),
}));

