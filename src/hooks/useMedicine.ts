import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { IQueryMedicine, medicineApi, TMedicineDTO } from "../apis/modules/medicineApi";

const useMedicine = (payload: IQueryMedicine) => {
  //getAll + search
  const {
    data: medicines,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["medicines", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await medicineApi.getAllMedicine({
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
  const { data: medicine } = useQuery({
    queryKey: ["medicine"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await medicineApi.getMedicineById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createMedicine, data: resCreateMedicine } = useMutation({
    mutationFn: ({ payload }: { payload: TMedicineDTO }) => {
      console.log("🚀 ~ useMedicine ~ payload:", payload)
      return medicineApi.createMedicine(payload);
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
  const { mutate: updateMedicine, data: resUpdateMedicine } = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: TMedicineDTO;
    }) => {
      return medicineApi.updateMedicine(id, payload);
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
  const { mutate: deleteMedicine, data: resDeleteMedicine } = useMutation({
    mutationFn: (id: number) => {
      return medicineApi.deleteMedicine(id);
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
    medicine,
    medicines,
    createMedicine,
    updateMedicine,
    deleteMedicine,
    isError,
    isLoading,
    error,
    resCreateMedicine,
    resUpdateMedicine,
    resDeleteMedicine
  };
};

export { useMedicine };

