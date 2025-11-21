import { baseApi } from "@/redux/baseApi";
import type {  IAdminStats, IResponse, IUserStats } from "@/types";
export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
    getStatsForAdmin: builder.query<IResponse<IAdminStats>, undefined>({
      query: () => ({
        url: "/stats/admin",
        method: "GET",
        
      }),
      providesTags:["TRANSACTION"]
    }),
    getStatsForUser: builder.query<IResponse<IUserStats>, undefined>({
      query: () => ({
        url: "/stats/user",
        method: "GET",
        
      }),
      providesTags:["TRANSACTION"]
    }),
   
  }),
});

export const {useGetStatsForAdminQuery,useGetStatsForUserQuery } = statsApi;
