import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import EventService from './event.url';

// Query for GET all events
export const useGetAllEvents = (params?: Event[]) => {
  return useQuery({
    queryKey: ['events', params],
    queryFn: async () => EventService.getAllEvents(params),
  });
};

// Mutation for ADD event
export const useAddEvent = (
  options?: UseMutationOptions<AxiosResponse, unknown, Event>,
) => {
  return useMutation<AxiosResponse, unknown, Event>({
    mutationFn: async (data: Event) => {
      const response = await EventService.addEvent(data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for UPDATE event data
export const useUpdateEvent = (
  options?: UseMutationOptions<AxiosResponse, unknown, { id: string; data: Event }>,
) => {
  return useMutation<AxiosResponse, unknown, { id: string; data: Event }>({
    mutationFn: async ({ id, data }: { id: string; data: Event }) => {
      const response = await EventService.updateEvent(id, data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for DELETE event
export const useDeleteEvent = (
  options?: UseMutationOptions<void, unknown, string>,
) => {
  return useMutation<void, unknown, string>({
    mutationFn: async (id: string) => {
      await EventService.deleteEvent(id);
    },
    ...options,
  });
};
