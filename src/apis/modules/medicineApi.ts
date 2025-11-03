import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { IQueryParams } from "../../types/commonType";
import type { MedicineDTO } from "../../types/medicineType";

export type TMedicineDTO = Omit<
  MedicineDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type IQueryMedicine = Omit<IQueryParams, "isActive">;

const getAllMedicine = async (params: IQueryMedicine) => {
  const response = axiosInstance.get(`/medicine/?${qs.stringify(params)}`);
  return response;
};

const createMedicine = async (data: TMedicineDTO) => {
  const response = axiosInstance.post(`/medicine/create`, data);
  return response;
};

const getMedicineById = async (id: number) => {
  const response = axiosInstance.get(`/medicine/${id}`);
  return response;
};

const updateMedicine = async (id: number, data: TMedicineDTO) => {
  const response = axiosInstance.patch(`/medicine/update/${id}`, data);
  return response;
};

const deleteMedicine = async (id: number) => {
  const response = await axiosInstance.delete(`/medicine/${id}`);
  return response;
};
export const medicineApi = {
  createMedicine,
  getAllMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
