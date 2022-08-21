import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../models/models';

export const mbaApi = createApi({
  reducerPath: 'mba/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-moscow-mba.herokuapp.com/',
  }),
  endpoints: build => ({
    products: build.query<IProduct[], string>({
      query: () => ({
        url: 'products',
        params: {
          // g: products
          _limit: 5,
        },
      }),
    }),
  }),
});

export const { useProductsQuery } = mbaApi;