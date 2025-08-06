import axios from 'axios';
import { User, Project, DashboardStats } from '../src/types';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// Mock data since we're using a demo API
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    role: 'admin',
    department: 'Engineering',
    joinDate: '2023-01-15',
    status: 'active',
    projectsCount: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    role: 'developer',
    department: 'Engineering',
    joinDate: '2023-03-22',
    status: 'active',
    projectsCount: 3
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    role: 'designer',
    department: 'Design',
    joinDate: '2023-02-10',
    status: 'active',
    projectsCount: 4
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@company.com',
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    role: 'manager',
    department: 'Product',
    joinDate: '2022-11-05',
    status: 'active',
    projectsCount: 7
  }
];

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of the customer-facing e-commerce platform with modern UI/UX',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progress: 65,
    teamMembers: ['1', '2', '3'],
    budget: 150000,
    tags: ['frontend', 'design', 'react']
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    status: 'planning',
    priority: 'medium',
    startDate: '2024-03-01',
    endDate: '2024-12-15',
    progress: 15,
    teamMembers: ['2', '4'],
    budget: 200000,
    tags: ['mobile', 'ios', 'android']
  },
  {
    id: '3',
    name: 'Data Analytics Dashboard',
    description: 'Internal analytics dashboard for business intelligence and reporting',
    status: 'completed',
    priority: 'medium',
    startDate: '2023-09-01',
    endDate: '2024-01-30',
    progress: 100,
    teamMembers: ['1', '4'],
    budget: 80000,
    tags: ['analytics', 'dashboard', 'data']
  },
  {
    id: '4',
    name: 'API Integration System',
    description: 'Microservices architecture for third-party API integrations',
    status: 'review',
    priority: 'high',
    startDate: '2024-02-01',
    endDate: '2024-05-15',
    progress: 85,
    teamMembers: ['1', '2'],
    budget: 120000,
    tags: ['backend', 'api', 'microservices']
  }
];

const mockStats: DashboardStats = {
  totalUsers: 24,
  activeUsers: 18,
  totalProjects: 12,
  completedProjects: 8,
  inProgressProjects: 4,
  totalRevenue: 1250000
};

export const userApi = {
  getUsers: async (): Promise<User[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockUsers;
  },
  
  getUserById: async (id: string): Promise<User | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers.find(user => user.id === id);
  },
  
  createUser: async (userData: Omit<User, 'id'>): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser = { ...userData, id: Date.now().toString() };
    return newUser;
  },
  
  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const user = mockUsers.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return { ...user, ...userData };
  }
};

export const projectApi = {
  getProjects: async (): Promise<Project[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockProjects;
  },
  
  getProjectById: async (id: string): Promise<Project | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProjects.find(project => project.id === id);
  },
  
  createProject: async (projectData: Omit<Project, 'id'>): Promise<Project> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    const newProject = { ...projectData, id: Date.now().toString() };
    return newProject;
  },
  
  updateProject: async (id: string, projectData: Partial<Project>): Promise<Project> => {
    await new Promise(resolve => setTimeout(resolve, 900));
    const project = mockProjects.find(p => p.id === id);
    if (!project) throw new Error('Project not found');
    return { ...project, ...projectData };
  }
};

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockStats;
  }
};