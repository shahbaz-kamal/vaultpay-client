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
    updateContactUsMessage: builder.mutation<IResponse<null>, { id: string }>({
      query: ({ id }) => ({
        url: `/client-message/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["CONTACTUS"],
    }),
    getContactUsMessage: builder.query<IResponse<IContactUs[]>, undefined>({
      query: () => ({
        url: `/client-message`,
        method: "GET",
      }),
      providesTags: ["CONTACTUS"],
    }),
  }),
});

export const { useStoreContactUsMessageMutation, useUpdateContactUsMessageMutation, useGetContactUsMessageQuery } = contactUsApi;
