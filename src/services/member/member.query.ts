import { useQuery, useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import MemberService from './member.url';

// Query for GET all members
export const useGetAllMembers = (params?: Member[]) => {
  return useQuery({
    queryKey: ['members', params],
    queryFn: async () => {
      const response = await MemberService.getAllMembers(params);
      return response.data.data;
    },
  });
};

// Mutation for ADD member
export const useAddMember = (
  options?: UseMutationOptions<AxiosResponse, unknown, FormData>,
) => {
  return useMutation<AxiosResponse, unknown, FormData>({
    mutationFn: async (data: FormData) => {

      const response = await MemberService.addMember(data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for UPDATE member data
export const useUpdateMemberData = (
  options?: UseMutationOptions<AxiosResponse, unknown, { id: string; data: FormData }>,
) => {
  return useMutation<AxiosResponse, unknown, { id: string; data: FormData }>({
    mutationFn: async ({ id, data }: { id: string; data: FormData }) => {
      const response = await MemberService.updateMemberData(id, data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for DELETE member
export const useDeleteMember = (
  options?: UseMutationOptions<void, unknown, string>,
) => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, string>({
    mutationFn: async (id: string) => {
      await MemberService.deleteMember(id);
    },
    onSuccess: () => {
      // Invalidate queries to ensure data is up-to-date
      queryClient.invalidateQueries({ queryKey: ['members'] });
    },
    ...options,
  });
};
