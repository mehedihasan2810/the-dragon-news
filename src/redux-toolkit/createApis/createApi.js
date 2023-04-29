import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://the-dragon-news-server-mehedihasan2810.vercel.app" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
    }),
    getCategory: builder.query({
      query: (id) => `categories/${id}`,
    }),
    getAllNews: builder.query({
      query: () => `news`,
    }),
    getSingleNews: builder.query({
      query: (id) => `news/${id}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetSingleNewsQuery,
  useGetAllNewsQuery,
} = newsApi;
