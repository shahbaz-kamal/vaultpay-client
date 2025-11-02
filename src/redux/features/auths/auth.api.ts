import { baseApi } from "@/redux/baseApi";
import type { ILogin, IRegister, IResponse, ISendOtp } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: builder.mutation<IResponse<any>,ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: builder.mutation<IResponse<any>,IRegister>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>,ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});

export const { useRegisterMutation ,useLoginMutation,useSendOtpMutation} = authApi;
