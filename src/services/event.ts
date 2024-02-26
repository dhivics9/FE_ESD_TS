import axios, { AxiosResponse } from "axios";
import { getBearerHeader } from "../utils/service";
import { BASE_URL } from "./url";

function getAllEvents(token: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/events`;
  return axios.get(url, { headers: getBearerHeader(token) });
}

function addEvent(token: string, data: Event): Promise<AxiosResponse> {
  const url = `${BASE_URL}/events/add`;
  return axios.post(url, data, { headers: getBearerHeader(token) });
}

function updateEvent(token: string, id: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/events/${id}`;
  return axios.put(url, { headers: getBearerHeader(token) });
}

function deleteEvent(token: string, id: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/events/${id}`;
  return axios.delete(url, { headers: getBearerHeader(token) });
}


const EventService = {
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent
};

export default EventService;