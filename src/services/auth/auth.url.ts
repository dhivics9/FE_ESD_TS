import axios, { AxiosResponse } from "axios";
import { getBearerHeader } from "../../utils/service";
import { BASE_URL } from "../url";

function login(email: string, password: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/login`;
  const token = window.btoa(`${email}:${password}`);
  return axios.post(url, {
    email,
    password
  }, { headers: getBearerHeader(token) });
}

function logout(): Promise<AxiosResponse> {
  const url = `${BASE_URL}/logout`;
  return axios.post(url);
}

export const AuthService = {
  login,
  logout
};
