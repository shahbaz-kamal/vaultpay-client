import { baseApi } from "@/redux/baseApi";
import type { IContactUs, IResponse } from "@/types";
export const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    storeContactUsMessage: builder.mutation<IResponse<null>, Partial<IContactUs>>({
      query: (contactUsInfo) => ({
        url: "/client-message/store",
        method: "POST",
        data: contactUsInfo,
      }),
      invalidatesTags: ["CONTACTUS"],
    }),
    getContactUsMessage: builder.query<IResponse<IContactUs[]>, { id: string }>({
      query: ({ id }) => ({
        url: `/client-message/${id}`,
        method: "PATCH",
      }),
      providesTags: ["CONTACTUS"],
    }),
  }),
});

export const { useStoreContactUsMessageMutation, useGetContactUsMessageQuery } = contactUsApi;
