import { baseApi } from "@/redux/baseApi";
import type { IChangePassword, IForgetPassword, ILogin, IRegister, IResetPassword, IResponse, ISendOtp, ISetPassword, IVerifyOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: builder.mutation<IResponse<any>, ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: builder.mutation<IResponse<any>, IRegister>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    forgetPassword: builder.mutation<IResponse<null>, IForgetPassword>({
      query: (userInfo) => ({
        url: "/auth/forgot-password",
        method: "POST",
        data: userInfo,
      }),
    }),
    resetPassword: builder.mutation<IResponse<null>, IResetPassword>({
      query: ({ id, newPassword, token }) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: { id, newPassword },
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["USER"],
    }),
    setPassword: builder.mutation<IResponse<null>, ISetPassword>({
      query: ({ password }) => ({
        url: "/auth/set-password",
        method: "POST",
        data: { password },
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation<IResponse<null>, IChangePassword>({
      query: ({ oldPassword,newPassword }) => ({
        url: "/auth/change-password",
        method: "POST",
        data: { oldPassword,newPassword },
      }),
      invalidatesTags: ["USER"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMe: builder.query<IResponse<any>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useGetMeQuery,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useChangePasswordMutation
} = authApi;
