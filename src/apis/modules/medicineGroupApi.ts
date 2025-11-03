import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { IQueryParams } from "../../types/commonType";
import type { MedicineGroupDTO } from "../../types/medicineGroupType";

export type TMedicineGroupDTO = Omit<
  MedicineGroupDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type IQueryMedicineGroup = Omit<IQueryParams, "isActive" | "slug">;

const getAllMedicineGroups = async (params: IQueryMedicineGroup) => {
  const response = axiosInstance.get(
    `/medicine-group/?${qs.stringify(params)}`
  );
  return response;
};

const createMedicineGroup = async (data: TMedicineGroupDTO) => {
  const response = axiosInstance.post(`/medicine-group/create`, data);
  return response;
};

const getMedicineGroupById = async (id: number) => {
  const response = axiosInstance.get(`/medicine-group/${id}`);
  return response;
};

const updateMedicineGroup = async (id: number, data: TMedicineGroupDTO) => {
  const response = axiosInstance.patch(`/medicine-group/update/${id}`, data);
  return response;
};

const deleteMedicineGroup = async (id: number) => {
  const response = await axiosInstance.delete(`/medicine-group/${id}`);
  return response;
};

export const medicineGroupApi = {
  createMedicineGroup,
  getAllMedicineGroups,
  getMedicineGroupById,
  updateMedicineGroup,
  deleteMedicineGroup,
};
