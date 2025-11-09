
/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";
import type { IAddMoney, ICashOut, IResponse, ITransaction, IVerifyOtp } from "@/types";
import type { ISendMOney } from "@/types/transaction.type";
export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMOney: builder.mutation<IResponse<any>, IAddMoney>({
      query: (addMOneyInfo) => ({
        url: "/transaction/add-money",
        method: "POST",
        data: addMOneyInfo,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashOut: builder.mutation<IResponse<ITransaction>, ICashOut>({
      query: (cahOutInfo) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data: cahOutInfo,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    sendMoney: builder.mutation<IResponse<ITransaction>, ISendMOney>({
      query: (sendMoneyInfo) => ({
        url: "/transaction/send-money",
        method: "POST",
        data: sendMoneyInfo,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),

    getSingleTransaction: builder.query<IResponse<ITransaction>, { transactionId: string }>({
      query: ({ transactionId }) => ({
        url: "/transaction/getSingleTransaction",
        method: "GET",
        params: { transactionId },
      }),
    }),
    getMyTransaction: builder.query<IResponse<ITransaction[]>, { from?: string; to?: string; searchTerm?: string }>({
      query: (params) => ({
        url: "/transaction/myTransactions",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    getAllTransactions: builder.query<IResponse<ITransaction[]>, { from?: string; to?: string; searchTerm?: string }>({
      query: (params) => ({
        url: "/transaction/transactions",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useAddMOneyMutation,
  useGetSingleTransactionQuery,
  useCashOutMutation,
  useGetMyTransactionQuery,
  useGetAllTransactionsQuery,
  useSendMoneyMutation,
} = transactionApi;
