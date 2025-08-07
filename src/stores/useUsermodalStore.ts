import { create }  from "zustand";

interface UserModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useUserModalStore = create<UserModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));