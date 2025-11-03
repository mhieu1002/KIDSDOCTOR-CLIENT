import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { BannerDTO } from "../../types/bannerType";
import type { IQueryParams } from "../../types/commonType";

export type IQueryBanner = Omit<IQueryParams, "isActive">;

export type TBannerDTO = Omit<BannerDTO, "id" | "createdAt" | "updatedAt" | "slug">;

const createBanner = async (data: TBannerDTO) => {
  const response = axiosInstance.post(`/banner/create`, data);
  return response;
};

const getAllBanners = async (params: IQueryBanner) => {
  const response = axiosInstance.get(`/banner/?${qs.stringify(params)}`);
  return response;
};

const getBannerById = async (id: number) => {
  const response = axiosInstance.get(`/banner/${id}`);
  return response;
};

const updateBanner = async (id: number, data: TBannerDTO) => {
  const response = axiosInstance.patch(`/banner/update/${id}`, data);
  return response;
};

const deleteBanner = async (id: number) => {
  const response = axiosInstance.delete(`/banner/${id}`);
  return response;
};

export const bannerApi = {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
