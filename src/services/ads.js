import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads/",
      headers: {
        "Content-Type": "application/json",
      },
    }),
    // getAllSets: builder.query({
    //   query: () => "selection/",
    // }),
    // addLike: builder.mutation({
    //   query: (body) => ({
    //     url: `track/${body.id}/favorite/`,
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${body.token}`,
    //     },
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const { useGetAllAdsQuery } = adsApi;
