import {baseApi} from '../baseApi';

const productsApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        getAllProducts: build.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags: ['products'],
        }),

        getAllProductsById: build.query({
            query: (_id: string) => ({
                url: `/products/${_id}`,
                method: 'GET',
            }),
            providesTags: ['products'],
        }),

        // submitComment_reply: build.mutation({
        //   query: (comment: any) => ({
        //     url: "/comment-reply",
        //     method: "POST",
        //     data: comment,
        //   }),
        //   invalidatesTags: ["products"],
        // }),
    }),
    overrideExisting: false,
});

export const {useGetAllProductsQuery, useGetAllProductsByIdQuery} = productsApi;
