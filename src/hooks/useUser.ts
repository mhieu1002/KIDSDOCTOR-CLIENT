import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { isNil } from "lodash";
import { changePass, IQueryUser, TUserDTO, updatePass, userApi } from "../apis/modules/userApi";

const useUser = (payload: IQueryUser) => {
  //Get All
  const {
    data: users,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await userApi.getAll({
        page: payload.page,
        pageSize: payload.pageSize,
        keyword: payload.keyword,
      });
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //getById
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await userApi.getById(payload.id);
      const { data } = response;
      return {
        data,
      };
    },
  });

  //create
  const { mutate: createUser, data: resCreateUser } = useMutation({
    mutationFn: ({ payload }: { payload: TUserDTO }) => {
      return userApi.create(payload);
    },
    onSuccess: (data) => {
      refetch();
      message.success("Tạo tài khoản thành công");
      return data;
    },
    onError: (error) => {
      message.error("Đã xảy ra lỗi");
      return error;
    },
  });

  //update
  const { mutate: updateUser, data: resUpdateUser } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TUserDTO }) => {
      return userApi.updateUser(id, payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  //updatePassword
  const { mutate: updatePassword, data: resUpdatePassword } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: updatePass }) => {
      return userApi.updatePassword(id, payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  //changePassword
  const { mutate: changePassword, data: resChangePassWord } = useMutation({
    mutationFn: ({ payload }: { payload: changePass }) => {
      return userApi.changePassword(payload);
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
    createUser,
    updateUser,
    updatePassword,
    changePassword,
    users,
    user,
    isLoading,
    isError,
    error,
    resCreateUser,
    resUpdateUser,
    resUpdatePassword,
    resChangePassWord,
  };
};

export { useUser };
