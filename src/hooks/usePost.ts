import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import type {
  displayTime,
  IQueryPost,
  isActive,
  TPostDTO,
} from "../apis/modules/postApi";
import { postApi } from "../apis/modules/postApi";

const usePosts = (payload: IQueryPost) => {
  //getAll + search
  const {
    data: posts,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "posts",
      payload.page,
      payload.pageSize,
      payload.keyword,
      payload.slug,
      payload.isActive,
    ],
    queryFn: async () => {
      const response = await postApi.getAll({
        page: payload.page,
        pageSize: payload.pageSize,
        keyword: payload.keyword,
        slug: payload.slug,
        isActive: payload.isActive,
      });
      // keepPreviousData: true;
      const { data } = response;
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.slug) || !isNil(payload.page),
  });

  //getById
  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await postApi.getById(payload.id);
      const { data } = response;
      console.log("🚀 ~ usePosts ~ data:", data);
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
  });

  //create
  const { mutate: createPost, data: resCreatePost } = useMutation({
    mutationFn: ({ payload }: { payload: TPostDTO }) => {
      return postApi.create(payload);
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

  //update post
  const { mutate: updatePost, data: resUpdatePost } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TPostDTO }) => {
      // console.log("🚀 ~ usePosts ~ payload:", payload);
      return postApi.updatePost(id, payload);
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

  //update isActive
  const { mutate: updateisActive, data: resUpdateisActive } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: isActive }) => {
      return postApi.updateStatus(id, payload);
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

  //update display time
  const { mutate: updateDisplayTime, data: resUpdateDisplayTime } = useMutation(
    {
      mutationFn: ({ id, payload }: { id: number; payload: displayTime }) => {
        // console.log("🚀 ~ usePosts ~ displayTime:", payload)
        return postApi.updateDisplayTime(id, payload);
      },
      onSuccess: (data) => {
        // refetch();
        return data;
      },
      onError: (error) => {
        message.error("Đã xảy ra lỗi");
        return error;
      },
    }
  );

  //delete
  const { mutate: deletePost, data: resDeletePost } = useMutation({
    mutationFn: (id: number) => {
      return postApi.deletePost(id);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  return {
    refetch,
    createPost,
    updatePost,
    updateisActive,
    updateDisplayTime,
    deletePost,
    post,
    posts,
    isError,
    isLoading,
    error,
    resCreatePost,
    resUpdatePost,
    resUpdateisActive,
    resUpdateDisplayTime,
    resDeletePost,
  };
};

export { usePosts };
