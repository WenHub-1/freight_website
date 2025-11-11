import Axios, { type InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import { queryClient } from "./react-query.ts";
import { API_URL } from "./constants";

export const axios = Axios.create({
  baseURL: API_URL,
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("jwtToken");

  // Ensure headers are initialized
  config.headers = config.headers || {};

  // Set the Authorization header if the jwtTexists
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  config.headers["ngrok-skip-browser-warning"] = "69420";
  config.headers["ngrok-skip-browser-warning"] = "true"; // Add this line to skip Ngrok warning
  // Set the Accept header to "application/json"
  config.headers["Accept"] = "application/json";

  return config;
};

// Set up the request interceptor
axios.interceptors.request.use(authRequestInterceptor);

// Set up the response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // Return only the data from the response
  },
  (error) => {
    const status = error.response?.status || 200;

    // Handle 401 Unauthorized errors
    if (status === 401) {
      localStorage.clear();
      queryClient.clear();
    }

    return Promise.reject(error);
  },
);
