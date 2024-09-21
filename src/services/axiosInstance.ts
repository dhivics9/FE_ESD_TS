// src/api/axiosInstance.ts
import axios from "axios";
import { BASE_URL } from "./url";
import { setAuthLocalStorageData } from "../utils/storage";
import { isTokenExpired } from "../utils/auth";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("access_token"); // or wherever you store the token

  if (token && isTokenExpired(token)) {
    try {
      token = await refreshToken();
      localStorage.setItem("access_token", token);
    } catch (error) {
      setAuthLocalStorageData("remove");
      return Promise.reject(new Error("Token expired"));
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Dynamically set the Content-Type header based on the request data type
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  const response = await axios.post(`${BASE_URL}/api/auth/revalidatetoken`, {
    refreshToken: localStorage.getItem("refresh_token"),
  });
  return response.data.data;
};

export default axiosInstance;
