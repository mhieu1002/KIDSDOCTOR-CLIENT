import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { IQueryParams } from "../../types/commonType";
import type { DoctorDTO } from "../../types/doctorType";

export type TDoctorDTO = Omit<
  DoctorDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;
export type IQueryDoctor = Omit<IQueryParams, "slug">;

const getAllDoctors = async (params: IQueryDoctor) => {
  const response = await axiosInstance.get(`/doctor?${qs.stringify(params)}`);
  return response;
};

const createDoctor = async (data: TDoctorDTO) => {
  const response = await axiosInstance.post(`/doctor/create`, data);
  return response;
};

const getDoctorById = async (id: number) => {
  const response = await axiosInstance.get(`/doctor/${id}`);
  return response;
};

const updateDoctor = async (id: number, data: TDoctorDTO) => {
  const response = axiosInstance.patch(`doctor/update/${id}`, data);
  return response;
};

const deleteDoctor = async (id: number) => {
  const response = await axiosInstance.delete(`/doctor/${id}`);
  return response;
};

export const doctorApi = {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
