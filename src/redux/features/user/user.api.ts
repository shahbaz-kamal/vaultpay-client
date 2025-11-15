import { baseApi } from "@/redux/baseApi";
import type { IResponse, IUpdateUser, IUser } from "@/types";
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUser: builder.mutation<IResponse<any>, IUpdateUser>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags:["USER"]
    }),
  getAllUsers: builder.query<IResponse<IUser[]>, { role:string, searchTerm?: string }>({
      query: (params) => ({
        url: "/user/users",
        method: "GET",
        params,
      }),
      providesTags: ["USER"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMe: builder.query<IResponse<any>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const { useUpdateUserMutation,useGetAllUsersQuery } = userApi;
