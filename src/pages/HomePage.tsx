import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  FolderKanban,
  TrendingUp,
  DollarSign,
  Activity,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { User, Project, DashboardStats } from "../../types/index";

const Home: React.FC = () => {
  const mockUsers: User[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "admin",
      department: "Engineering",
      joinDate: "2023-01-15",
      status: "active",
      projectsCount: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@company.com",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "developer",
      department: "Engineering",
      joinDate: "2023-03-22",
      status: "active",
      projectsCount: 3,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.rodriguez@company.com",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "designer",
      department: "Design",
      joinDate: "2023-02-10",
      status: "active",
      projectsCount: 4,
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.kim@company.com",
      avatar:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "manager",
      department: "Product",
      joinDate: "2022-11-05",
      status: "active",
      projectsCount: 7,
    },
  ];

  const mockProjects: Project[] = [
    {
      id: "1",
      name: "E-commerce Platform Redesign",
      description:
        "Complete overhaul of the customer-facing e-commerce platform with modern UI/UX",
      status: "in-progress",
      priority: "high",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      progress: 65,
      teamMembers: ["1", "2", "3"],
      budget: 150000,
      tags: ["frontend", "design", "react"],
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Native mobile application for iOS and Android platforms",
      status: "planning",
      priority: "medium",
      startDate: "2024-03-01",
      endDate: "2024-12-15",
      progress: 15,
      teamMembers: ["2", "4"],
      budget: 200000,
      tags: ["mobile", "ios", "android"],
    },
    {
      id: "3",
      name: "Data Analytics Dashboard",
      description:
        "Internal analytics dashboard for business intelligence and reporting",
      status: "completed",
      priority: "medium",
      startDate: "2023-09-01",
      endDate: "2024-01-30",
      progress: 100,
      teamMembers: ["1", "4"],
      budget: 80000,
      tags: ["analytics", "dashboard", "data"],
    },
    {
      id: "4",
      name: "API Integration System",
      description:
        "Microservices architecture for third-party API integrations",
      status: "review",
      priority: "high",
      startDate: "2024-02-01",
      endDate: "2024-05-15",
      progress: 85,
      teamMembers: ["1", "2"],
      budget: 120000,
      tags: ["backend", "api", "microservices"],
    },
  ];

  const mockStats: DashboardStats = {
    totalUsers: 24,
    activeUsers: 18,
    totalProjects: 12,
    completedProjects: 8,
    inProgressProjects: 4,
    totalRevenue: 1250000,
  };

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
    change,
  }: {
    title: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
    change?: string;
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            {value}
          </p>
          {change && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "planning":
        return "text-yellow-600 bg-yellow-100";
      case "review":
        return "text-purple-600 bg-purple-100";
      case "on-hold":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8 pt-8 pb-5">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl pt-10 p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-blue-100 text-lg">
          Manage your team, track projects, and monitor performance all in one
          place.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
          >
            <FolderKanban className="w-5 h-5 mr-2" />
            View Projects
          </Link>
          <Link
            to="/users"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors inline-flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Manage Users
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={mockStats?.totalUsers || 0}
          icon={Users}
          color="bg-blue-500"
          change="+12% this month"
        />
        <StatCard
          title="Active Projects"
          value={mockStats?.inProgressProjects || 0}
          icon={FolderKanban}
          color="bg-emerald-500"
          change="+8% this month"
        />
        <StatCard
          title="Completed Projects"
          value={mockStats?.completedProjects || 0}
          icon={CheckCircle}
          color="bg-purple-500"
          change="+23% this month"
        />
        <StatCard
          title="Total Revenue"
          value={`$${(mockStats?.totalRevenue || 0).toLocaleString()}`}
          icon={DollarSign}
          color="bg-orange-500"
          change="+15% this month"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Users */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Users
              </h2>
              <Link
                to="/users"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Projects
              </h2>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {mockProjects.map((project) => (
                <div key={project.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {project.description}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 ml-3">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Add User</p>
              <p className="text-sm text-gray-600">Invite team member</p>
            </div>
          </button>
          <button className="flex items-center p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors group">
            <FolderKanban className="w-8 h-8 text-emerald-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">New Project</p>
              <p className="text-sm text-gray-600">Start new project</p>
            </div>
          </button>
          <button className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
            <Activity className="w-8 h-8 text-purple-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">View Reports</p>
              <p className="text-sm text-gray-600">Analytics & insights</p>
            </div>
          </button>
          <button className="flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group">
            <AlertCircle className="w-8 h-8 text-orange-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Support</p>
              <p className="text-sm text-gray-600">Get help & support</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
