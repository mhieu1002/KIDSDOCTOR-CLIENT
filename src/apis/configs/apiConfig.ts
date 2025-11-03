import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL } from "../../constants";
import Cookies from "js-cookie";

interface ApiError<T> {
  data: T;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL.BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "no-cache",
    // Pragma: "no-cache",
    // "If-Modified-Since": "0",
  },
  withCredentials: true,
});

// Interceptor để xử lý token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = `Bearer ${Cookies.get("accessToken")}`;
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },

  (error: AxiosError) => {
    console.log("🚀 ~ file: apiConfig.ts:30 ~ error:", error);
    return Promise.reject(error);
  }
);

const handleError = (
  error: AxiosResponse<ApiError<unknown>>
): Promise<never> => {
  console.log("🚀 ~ file: apiConfig.ts:23 ~ handleError ~ error:", error);
  return Promise.reject({
    data: error,
  });
};

// Interceptor để xử lý lỗi
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log("Axios response:", response);
    return response.data;
  },
  (error: AxiosError<ApiError<unknown>>) => {
    if (axios.isAxiosError(error) && error.response) {
      return handleError(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
