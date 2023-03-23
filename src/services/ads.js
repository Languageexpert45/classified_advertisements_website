import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COMMENT_TAG = "comments";
const AD_TAG = "ads"
const MY_AD_TAG = "MyAd";

export const adsApi = createApi({
  reducerPath: "ads",
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
  tagTypes: [COMMENT_TAG, AD_TAG, MY_AD_TAG],
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads/",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: AD_TAG, id })) : [],
    }),
    getUserAds: builder.query({
      query: () => "ads/me",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: MY_AD_TAG, id })) : [],
    }),
    getAdById: builder.query({
      query: (adId) => `ads/${adId}`,
    }),
    getAdComments: builder.query({
      query: ({ adId }) => ({ url: `ads/${adId}/comments` }),
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: COMMENT_TAG, id })) : [],
    }),
    addComment: builder.mutation({
      query: ({ comment, adId }) => ({
        url: `ads/${adId}/comments/`,
        Accept: "application/json",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: [COMMENT_TAG],
    }),
    addAd: builder.mutation({
      query: ({ files, titleAdv, descriptionAdv, priceAdv }) => ({
        url: `ads?${new URLSearchParams({
          title: titleAdv,
          description: descriptionAdv,
          price: priceAdv,
        })}`,
        Accept: "multipart/form-data",
        method: "POST",
        body: files,
      }),
      invalidatesTags: [MY_AD_TAG, AD_TAG],
    }),
    addAdImage: builder.mutation({
      query: ({ files, adId }) => ({
        url: `ads/${adId}/image`,
        Accept: "multipart/form-data",
        method: "POST",
        body: files,
      }),
      invalidatesTags: [MY_AD_TAG, AD_TAG],
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useGetAdCommentsQuery,
  useGetUserAdsQuery,
  useAddCommentMutation,
  useAddAdMutation,
  useAddAdImageMutation,
} = adsApi;
