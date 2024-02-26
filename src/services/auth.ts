import axios, { AxiosResponse } from "axios";
import { getBearerHeader } from "../utils/service";
import { BASE_URL } from "./url";
import { FormLogin } from "../store/user/action";

function login(email: string, password: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/login`;
  const token = window.btoa(`${email}:${password}`);
  return axios.post(url, {
    email,
    password
  }, { headers: getBearerHeader(token) });
}

function register(token: string, data: FormLogin): Promise<AxiosResponse> {
  const url = `${BASE_URL}/register`;
  return axios.post(url, data, { headers: getBearerHeader(token) });
}

function logout(token: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/logout`;
  return axios.post(url, { headers: getBearerHeader(token) });
}

export const AuthService = {
  login,
  register,
  logout
};