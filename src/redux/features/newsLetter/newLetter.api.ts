import { baseApi } from "@/redux/baseApi";
import type { INewsLetter, IResponse } from "@/types";
export const newsLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    storeNewsLetter: builder.mutation<IResponse<null>, INewsLetter>({
      query: (newsLetterInfo) => ({
        url: "/news-letter/store",
        method: "POST",
        data: newsLetterInfo,
      }),
      invalidatesTags: ["NEWSLETTER"],
    }),
    getNewsLetterInfo: builder.query<IResponse<INewsLetter[]>, undefined>({
      query: () => ({
        url: "/news-letter",
        method: "GET",
      }),
      providesTags: ["NEWSLETTER"],
    }),
  }),
});

export const { useStoreNewsLetterMutation, useGetNewsLetterInfoQuery } = newsLetterApi;
