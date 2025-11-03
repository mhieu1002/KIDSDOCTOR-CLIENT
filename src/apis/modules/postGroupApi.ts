import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { IQueryParams } from "../../types/commonType";
import type { PostGroupDTO } from "../../types/postGroupType";

export type TPostGroupDTO = Omit<
  PostGroupDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type IQueryPostGroup = Omit<IQueryParams, "isActive" | "slug">;

const getAllPostGroup = async (params: IQueryPostGroup) => {
  const response = axiosInstance.get(`/post-group/?${qs.stringify(params)}`);
  return response;
};

const createPostGroup = async (data: TPostGroupDTO) => {
  const response = axiosInstance.post(`/post-group/create`, data);
  return response;
};

const getPostGroupById = async (id: number) => {
  const response = axiosInstance.get(`/post-group/${id}`);
  return response;
};

const updatePostGroup = async (id: number, data: TPostGroupDTO) => {
  const response = axiosInstance.patch(`/post-group/${id}`, data);
  return response;
};

const deletePostGroup = async (id: number) => {
  const response = axiosInstance.delete(`/post-group/${id}`,);
  return response;
};

export const postGroupApi = {
  getAllPostGroup,
  createPostGroup,
  updatePostGroup,
  getPostGroupById,
  deletePostGroup
};
