import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct, ServerResponse} from "../../models/models";

export const mbaApi = createApi({
    reducerPath: 'mba/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-moscow-mba.herokuapp.com/'
    }),
    endpoints: build => ({
        products: build.query<IProduct[], string>({
            query: (products: string) => ({
                url: 'products',
                // params: {
                    // G: products
                    // page : 10
                // }
            }),
            transformResponse: (response: ServerResponse<IProduct>) => response.items
        })
    })
})

export const {useProductsQuery} = mbaApi