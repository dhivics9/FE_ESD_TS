import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";

function getAllEvents(params?: Event[]): Promise<AxiosResponse> {
  return axiosInstance.get('/events', { params });
}

function addEvent(data: Event): Promise<AxiosResponse> {
  return axiosInstance.post('/events/add', data);
}

function updateEvent(id: string, data: Event): Promise<AxiosResponse> {
  return axiosInstance.put(`/events/${id}`, data);
}

function deleteEvent(id: string): Promise<AxiosResponse> {
  return axiosInstance.delete(`/events/${id}`);
}

const EventService = {
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent
};

export default EventService;
