import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import type { IQueryPostGroup, TPostGroupDTO } from "../apis/modules/postGroupApi";
import {  postGroupApi } from "../apis/modules/postGroupApi";


const usePostGroup = (payload: IQueryPostGroup) => {
  //getAll + search
  const {
    data: postGroups,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["postGroups", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await postGroupApi.getAllPostGroup({
        page: payload.page,
        pageSize: payload.pageSize,
        keyword: payload.keyword,
      });
      const { data } = response;
      return { data };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //getByID
  const { data: postGroup } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await postGroupApi.getPostGroupById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createPostGroup, data: resCreatePostGroup } = useMutation({
    mutationFn: ({ payload }: { payload: TPostGroupDTO }) => {
      return postGroupApi.createPostGroup(payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  //update
  const { mutate: updatePostGroup, data: resUpdatePostGroup } = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: TPostGroupDTO;
    }) => {
      return postGroupApi.updatePostGroup(id, payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  //delete
  const { mutate: deletePostGroup, data: resDeletePostGroup } = useMutation({
    mutationFn: (id: number) => {
      return postGroupApi.deletePostGroup(id);
    },
    onSuccess: (data) => {
      refetch();
      message.success("Xoá bác sĩ thành công");
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  return {
    refetch,
    postGroups,
    postGroup,
    createPostGroup,
    deletePostGroup,
    updatePostGroup,
    isError,
    isLoading,
    error,
    resCreatePostGroup,
    resUpdatePostGroup,
    resDeletePostGroup,
  };
};

export { usePostGroup };
