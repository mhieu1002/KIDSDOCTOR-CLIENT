import type { LoginDTO } from "../../types/authType";
import axiosInstance from "../configs/apiConfig";

const login = async (data: LoginDTO) => {
  const response = axiosInstance.post(`/auth/login`, data);
  return response;
};

const getProfile = async () => {
  const response = axiosInstance.get(`/auth/profile`);
  return response;
};

export const authApi = {
  login,
  getProfile,
};
