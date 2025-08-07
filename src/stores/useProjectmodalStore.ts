import { create }  from "zustand";

interface ProjectModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useProjectModalStore = create<ProjectModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));