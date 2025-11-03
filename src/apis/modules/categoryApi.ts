import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { IQueryParams } from "../../types/commonType";
import type { PostCategoryDTO } from "../../types/postCategoryType";

export type TPostCategoryDTO = Omit<
  PostCategoryDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type IQueryCategory = Omit<IQueryParams, "isActive" | "slug">;

const getAllPostCategories = async (params: IQueryCategory) => {
  const response = axiosInstance.get(`/post-category/?${qs.stringify(params)}`);
  return response;
};

const createPostCategory = async (data: TPostCategoryDTO) => {
  const response = axiosInstance.post(`/post-category/create`, data);
  return response;
};

const getPostCategoryId = async (id: number) => {
  const response = axiosInstance.get(`/post-category/${id}`);
  return response;
};

const updatePostCategory = async (id: number, data: TPostCategoryDTO) => {
  const response = axiosInstance.patch(`/post-category/update/${id}`, data);
  return response;
};

const deletePostCategory = async (id: number) => {
  const response = axiosInstance.delete(`/post-category/${id}`);
  return response;
};

export const categoryApi = {
  getAllPostCategories,
  createPostCategory,
  getPostCategoryId,
  updatePostCategory,
  deletePostCategory,
};
