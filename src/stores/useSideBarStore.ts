import { create }  from "zustand";

interface SidebarStore {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
}));