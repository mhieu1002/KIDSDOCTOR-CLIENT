// useAuth.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { authApi } from "../apis/modules/authApi";
import type { LoginDTO } from "../types/authType";

const useAuth = () => {
  const { mutate: login, data: resLogin } = useMutation({
    mutationFn: (payload: LoginDTO) => authApi.login(payload),
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  //getProfile
  const isLoggedIn = !!Cookies.get("accessToken");
  const { data: profile } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const token = Cookies.get("accessToken");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await authApi.getProfile();
      const { data } = response;
      return {
        data,
      };
    },
    initialData: null,
    enabled: isLoggedIn,
    retry: false,
  });

  return {
    login,
    profile,
    resLogin,
  };
};

export default useAuth;
