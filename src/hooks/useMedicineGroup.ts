import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { medicineGroupApi } from "../apis/modules/medicineGroupApi";
import type {
  IQueryMedicineGroup,
  TMedicineGroupDTO,
} from "../apis/modules/medicineGroupApi";

const useMedicineGroup = (payload: IQueryMedicineGroup) => {
  //getAll + search
  const {
    data: medicineGroups,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "medicineGroups",
      payload.page,
      payload.pageSize,
      payload.keyword,
    ],
    queryFn: async () => {
      const response = await medicineGroupApi.getAllMedicineGroups({
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
  const { data: medicineGroup } = useQuery({
    queryKey: ["medicineGroup"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await medicineGroupApi.getMedicineGroupById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  //create
  const { mutate: createMedicineGroup, data: resCreateMedicineGroup } =
    useMutation({
      mutationFn: ({ payload }: { payload: TMedicineGroupDTO }) => {
        // console.log("🚀 ~ useMedicineGroup ~ payload:", payload)
        return medicineGroupApi.createMedicineGroup(payload);
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
  const { mutate: updateMedicineGroup, data: resUpdateMedicineGroup } =
    useMutation({
      mutationFn: ({
        id,
        payload,
      }: {
        id: number;
        payload: TMedicineGroupDTO;
      }) => {
        return medicineGroupApi.updateMedicineGroup(id, payload);
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
  const { mutate: deleteMedicineGroup, data: resDeleteMedicineGroup } =
    useMutation({
      mutationFn: (id: number) => {
        return medicineGroupApi.deleteMedicineGroup(id);
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
    medicineGroup,
    medicineGroups,
    createMedicineGroup,
    updateMedicineGroup,
    deleteMedicineGroup,
    isError,
    isLoading,
    error,
    resCreateMedicineGroup,
    resUpdateMedicineGroup,
    resDeleteMedicineGroup,
  };
};

export { useMedicineGroup };
