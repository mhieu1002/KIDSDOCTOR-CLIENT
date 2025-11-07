import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { doctorApi } from "../apis/modules/doctorApi";
import type { TDoctorDTO } from "../apis/modules/doctorApi";


export type TUseDoctorDto = {
  id?: number;
  page?: number;
  pageSize?: number;
  keyword?: string;
  status?: boolean;
};

const useDoctor = (payload: TUseDoctorDto) => {
  //getAll + search
  const {
    data: doctors,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "doctors",
      payload.page,
      payload.pageSize,
      payload.keyword,
    ],
    queryFn: async () => {
      const response = await doctorApi.getAllDoctors({
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
  const { data: doctor } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await doctorApi.getDoctorById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createDoctor, data: resCreateDoctor } = useMutation({
    mutationFn: ({ payload }: { payload: TDoctorDTO }) => {
      console.log("🚀 ~ useDoctor ~ payload:", payload)
      return doctorApi.createDoctor(payload);
    },
    onSuccess: (data) => {
      refetch();
      // message.success("Tạo bác sĩ thành công");
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  //update
  const { mutate: updateDoctor, data: resUpdateDoctor } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TDoctorDTO }) => {
      return doctorApi.updateDoctor(id, payload);
    },
    onSuccess: (data) => {
      refetch();
      // message.success("Cập nhật bác sĩ thành công");
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  //delete
  const { mutate: deleteDoctor, data: resDeleteDoctor } = useMutation({
    mutationFn: (id: number) => {
      return doctorApi.deleteDoctor(id);
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
    createDoctor,
    updateDoctor,
    deleteDoctor,
    doctors,
    doctor,
    isError,
    isLoading,
    error,
    resCreateDoctor,
    resUpdateDoctor,
    resDeleteDoctor,
  };
};

export { useDoctor };
