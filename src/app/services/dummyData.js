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
        query: (newProduct) => {
            
        }
    })
  }),
});

export const { useGetAllProductQuery, useGetOneProductQuery } = productApi;
