import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //get all products reading
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getOneProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addAproduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: updatedProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetOneProductQuery,
  useAddAproductMutation,
  useUpdateProductMutation,
} = productApi;
