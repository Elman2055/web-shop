import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://webshop2.kz/api";

export const webshopApi = createApi({
  reducerPath: "webshopApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    postProducts: builder.mutation({
      query: (body: string) => ({
        url: "/products/products",
        method: "POST",
        body: { category: body },
      }),
    }),
    getProduct: builder.query({
      query: (id: number) => `products/get-product/${id}`,
    }),
  }),
});

export const { usePostProductsMutation, useGetProductQuery } = webshopApi;
