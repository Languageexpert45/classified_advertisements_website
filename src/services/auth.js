import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "auth/register/",
        method: "POST",
        body,
      }),
    }),
    token: builder.mutation({
      query: (body) => ({
        url: "auth/login/",
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: "auth/login/",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useTokenMutation,
  useRefreshMutation,
} = authApi;
