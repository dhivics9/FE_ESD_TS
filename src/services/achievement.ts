import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./url";
import { getBearerHeader } from "../utils/service";

function getAllAchievements(token: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/achievements`;
  return axios.get(url, { headers: getBearerHeader(token) });
}

function addAchievement(token: string, data: Achievement): Promise<AxiosResponse> {
  const url = `${BASE_URL}/achievements/add`;
  return axios.post(url, data, { headers: getBearerHeader(token) });
}

function updateAchievementData(token: string, id: string, data: Achievement): Promise<AxiosResponse> {
  const url = `${BASE_URL}/achievements/${id}`;
  return axios.put(url, data, { headers: getBearerHeader(token) });
}

function deleteAchievement(token: string, id: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/achievements/${id}`;
  return axios.delete(url, { headers: getBearerHeader(token) });
}

const AchievementService = {
  getAllAchievements,
  addAchievement,
  updateAchievementData,
  deleteAchievement
};

export default AchievementService;