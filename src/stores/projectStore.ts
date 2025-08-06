import { create } from 'zustand';
import { Project } from '../types';

interface ProjectStore {
  selectedProject: Project | null;
  searchQuery: string;
  filterStatus: string;
  filterPriority: string;
  setSelectedProject: (project: Project | null) => void;
  setSearchQuery: (query: string) => void;
  setFilterStatus: (status: string) => void;
  setFilterPriority: (priority: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  selectedProject: null,
  searchQuery: '',
  filterStatus: 'all',
  filterPriority: 'all',
  setSelectedProject: (project) => set({ selectedProject: project }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterStatus: (status) => set({ filterStatus: status }),
  setFilterPriority: (priority) => set({ filterPriority: priority }),
}));