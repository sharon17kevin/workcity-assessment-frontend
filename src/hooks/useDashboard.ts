import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/api';

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: dashboardApi.getStats,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};