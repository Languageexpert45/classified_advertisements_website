import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads/",
    }),
    getAddById: builder.query({
      query: (adId) => `ads/${adId}`,
    }),
    getAddComments: builder.query({
      query: ({ adId }) => ({ url: `ads/${adId}/comments` }),
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: `ads?title=${body.title}&description=${body.description}&price=${body.price}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${body.token}`,
        },
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllAdsQuery, useGetAddByIdQuery, useGetAddCommentsQuery } = adsApi;
