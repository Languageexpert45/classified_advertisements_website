import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USER_TAG = "user";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("tokenAccess");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [USER_TAG],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "user/all",
    }),
    getCurrentUser: builder.query({
      query: () => "user/",
      providesTags: [USER_TAG],
    }),
    changeCurrentUser: builder.mutation({
      query: (body) => ({
        url: "user/",
        Accept: "application/json",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    changeUserAvatar: builder.mutation({
      query: (body) => ({
        url: "user/avatar",
        Accept: "multipart/form-data",
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    changeUserPassword: builder.mutation({
      query: (body) => ({
        url: "user/password",
        Accept: "application/json",
        method: "PUT",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetCurrentUserQuery,
  useChangeCurrentUserMutation,
  useChangeUserAvatarMutation,
  useChangeUserPasswordMutation,
} = userApi;
