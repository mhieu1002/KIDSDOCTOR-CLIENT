import axiosInstance from "../configs/apiConfig";

export type TStatisticalDto = {
  title: string;
  figures: number;
  icon: string;
};

const getAll = async () => {
  const response = await axiosInstance.get(`/statistical/`);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/statistical/${id}`);
  return response;
};

const create = async (data: TStatisticalDto) => {
  const response = axiosInstance.post(`/statistical/create`, data);
  return response;
};

const update = async (id: number, data: TStatisticalDto) => {
  const response = axiosInstance.patch(`/statistical/update/${id}`, data);
  return response;
};

const deleteStatistical = async (id: number) => {
  const response = axiosInstance.delete(`/statistical/${id}`);
  return response;
};

export const statisticalApi = {
  getAll,
  create,
  update,
  getById,
  deleteStatistical,
};
