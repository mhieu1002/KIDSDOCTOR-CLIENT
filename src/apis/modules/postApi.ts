import qs from "querystringify";
import axiosInstance from "../configs/apiConfig";
import type { PostsDTO } from "../../types/postType";
import type { IQueryParams } from "../../types/commonType";

export type isActive = {
  isActive: boolean;
};

export type displayTime = {
  displayTime: Date;
};

export type TPostDTO = Omit<
  PostsDTO,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>

export type IQueryPost = Omit<IQueryParams, "status">;

const getAll = async (params: IQueryPost) => {
  const response = await axiosInstance.get(`/post?${qs.stringify(params)}`);
  return response;
};

const getPostCounts = async () => {
  const response = await axiosInstance.get(`/post/counts`);
  return response;
};
const create = async (data: TPostDTO) => {
  const response = await axiosInstance.post(`/post/create`, data);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/post/${id}`);
  return response;
};

const deletePost = async (id: number) => {
  const response = await axiosInstance.delete(`/post/${id}`);
  return response;
};

const updateStatus = async (id: number, data: isActive) => {
  const response = axiosInstance.patch(`/post/update/${id}`, data);
  return response;
};

const updateDisplayTime = async (id: number, data: displayTime) => {
  const response = axiosInstance.patch(`post/update-time/${id}`, data);
  return response;
};

const updatePost = async (id: number, data: TPostDTO) => {
  const response = axiosInstance.patch(`post/update-post/${id}`, data);
  return response;
};

export const postApi = {
  getAll,
  create,
  getById,
  deletePost,
  updateStatus,
  updatePost,
  updateDisplayTime,
  getPostCounts,
};
