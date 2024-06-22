import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/utils/axiosBaseQuery';
import envConfig from '@/config/envConfig';

export const baseApi = createApi({
    baseQuery: axiosBaseQuery({
        baseUrl: envConfig.baseAPI || 'http://localhost:5000/',
    }),
    endpoints: () => ({}),
    tagTypes: ['products'],
    reducerPath: 'baseApi',
});

export const apiReducer = baseApi.reducer;
export const apiMiddleware = baseApi.middleware;
