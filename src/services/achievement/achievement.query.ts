import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import AchievementService from './achievement.url';

// Query for GET all achievements
export const useGetAllAchievements = (params?: Achievement[]) => {
  return useQuery({
    queryKey: ['achievements', params],
    queryFn: async () => AchievementService.getAllAchievements(params),
  });
};

// Mutation for ADD achievement
export const useAddAchievement = (
  options?: UseMutationOptions<AxiosResponse, unknown, Achievement>,
) => {
  return useMutation<AxiosResponse, unknown, Achievement>({
    mutationFn: async (data: Achievement) => {
      const response = await AchievementService.addAchievement(data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for UPDATE achievement data
export const useUpdateAchievementData = (
  options?: UseMutationOptions<AxiosResponse, unknown, { id: string; data: Achievement }>,
) => {
  return useMutation<AxiosResponse, unknown, { id: string; data: Achievement }>({
    mutationFn: async ({ id, data }: { id: string; data: Achievement }) => {
      const response = await AchievementService.updateAchievementData(id, data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for DELETE achievement
export const useDeleteAchievement = (
  options?: UseMutationOptions<void, unknown, string>,
) => {
  return useMutation<void, unknown, string>({
    mutationFn: async (id: string) => {
      await AchievementService.deleteAchievement(id);
    },
    ...options,
  });
};
