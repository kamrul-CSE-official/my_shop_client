import {AxiosRequestConfig} from 'axios';
import {axiosInstance} from './axiosInstance';

export const axiosBaseQuery =
    ({baseUrl}: {baseUrl: string}) =>
    async ({url, method, body}: {url: string; method: string; body: any}) => {
        const config: AxiosRequestConfig = {
            baseURL: baseUrl,
            url,
            method,
            data: body,
        };

        try {
            const response = await axiosInstance(config);
            return {data: response.data};
        } catch (error: any) {
            return {error: error.response?.data};
        }
    };
