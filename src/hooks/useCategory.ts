import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { categoryApi } from "../apis/modules/categoryApi";
import { IQueryCategory, TPostCategoryDTO } from "../apis/modules/categoryApi";

const useCategory = (payload: IQueryCategory) => {
  //getAll + search
  const {
    data: categories,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await categoryApi.getAllPostCategories({
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
  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await categoryApi.getPostCategoryId(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createCategory, data: resCreateCategory } = useMutation({
    mutationFn: ({ payload }: { payload: TPostCategoryDTO }) => {
      return categoryApi.createPostCategory(payload);
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
  const { mutate: updateCategory, data: resUpdateCategory } = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: TPostCategoryDTO;
    }) => {
      return categoryApi.updatePostCategory(id, payload);
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
  const { mutate: deleteCategory, data: resDeleteCategory } = useMutation({
    mutationFn: (id: number) => {
      return categoryApi.deletePostCategory(id);
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
    createCategory,
    deleteCategory,
    updateCategory,
    categories,
    category,
    isError,
    isLoading,
    error,
    resCreateCategory,
    resDeleteCategory,
    resUpdateCategory,
  };
};

export { useCategory };
