import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AuthService } from './auth.url';

// Mutation for LOGIN
export const useLogin = (
  options?: UseMutationOptions<AxiosResponse, unknown, { email: string; password: string }>,
) => {
  return useMutation<AxiosResponse, unknown, { email: string; password: string }>({
    mutationFn: async ({ email, password }) => {
      const response = await AuthService.login(email, password);
      return response.data;
    },
    ...options,
  });
};

// Mutation for LOGOUT
export const useLogout = (
  options?: UseMutationOptions<AxiosResponse, unknown, void>,
) => {
  return useMutation<AxiosResponse, unknown, void>({
    mutationFn: async () => {
      const response = await AuthService.logout();
      return response.data;
    },
    ...options,
  });
};
