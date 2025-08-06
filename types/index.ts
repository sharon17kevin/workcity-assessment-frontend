export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'developer' | 'designer';
  department: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  projectsCount: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  startDate: string;
  endDate: string;
  progress: number;
  teamMembers: string[];
  budget: number;
  tags: string[];
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalRevenue: number;
}