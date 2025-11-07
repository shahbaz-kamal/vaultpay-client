import { baseApi } from "@/redux/baseApi";
import type { IAddMoney, IResponse, ITransaction, IVerifyOtp } from "@/types";
export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addMOney: builder.mutation<IResponse<any>, IAddMoney>({
      query: (addMOneyInfo) => ({
        url: "/transaction/add-money",
        method: "POST",
        data: addMOneyInfo,
      }),
    }),

    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    getSingleTransaction: builder.query<IResponse<ITransaction>, { transactionId: string }>({
      query: ({ transactionId }) => ({
        url: "/transaction/getSingleTransaction",
        method: "GET",
        params: { transactionId },
      }),
    }),
  }),
});

export const { useAddMOneyMutation, useVerifyOtpMutation, useGetSingleTransactionQuery } = transactionApi;
