import { create } from 'zustand';
import { User } from '../types';

interface UserStore {
  selectedUser: User | null;
  searchQuery: string;
  filterRole: string;
  setSelectedUser: (user: User | null) => void;
  setSearchQuery: (query: string) => void;
  setFilterRole: (role: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  searchQuery: '',
  filterRole: 'all',
  setSelectedUser: (user) => set({ selectedUser: user }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterRole: (role) => set({ filterRole: role }),
}));