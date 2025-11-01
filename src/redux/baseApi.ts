import { envVars } from "@/config/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: envVars.BASE_URL,
  }),
  endpoints: () => ({}),
});
