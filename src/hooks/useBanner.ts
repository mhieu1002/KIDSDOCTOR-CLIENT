import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { bannerApi } from "../apis/modules/bannerApi";
import type { IQueryBanner, TBannerDTO } from "../apis/modules/bannerApi";

const useBanner = (payload: IQueryBanner) => {
  //getAll
  const {
    data: banners,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "banners",
      payload.page,
      payload.pageSize,
      payload.keyword,
    ],
    queryFn: async () => {
      const response = await bannerApi.getAllBanners({
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

  //getById
  const { data: banner } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await bannerApi.getBannerById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createBanner, data: resCreateBanner } = useMutation({
    mutationFn: ({ payload }: { payload: TBannerDTO }) => {
      return bannerApi.createBanner(payload);
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
  const { mutate: updateBanner, data: resUpdateBanner } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TBannerDTO }) => {
      console.log("🚀 ~ useBanner ~ payload:", payload);
      return bannerApi.updateBanner(id, payload);
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
  const { mutate: deleteBanner, data: resDeleteBanner } = useMutation({
    mutationFn: (id: number) => {
      return bannerApi.deleteBanner(id);
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
    createBanner,
    updateBanner,
    deleteBanner,
    banners,
    banner,
    isLoading,
    isError,
    error,
    resCreateBanner,
    resUpdateBanner,
    resDeleteBanner,
  };
};

export { useBanner };
