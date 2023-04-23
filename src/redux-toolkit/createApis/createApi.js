import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
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
