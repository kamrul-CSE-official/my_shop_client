import axios, {AxiosResponse} from 'axios';
import localStorageService from './localStorageService';

interface IErrorObject {
    statusCode: number;
    message: string;
    success: boolean;
    errorMessages: string[];
}

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorageService.getFromLocalStorage(
            'accessToken',
        )}`,
    },
    timeout: 60000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken =
            localStorageService.getFromLocalStorage('accessToken') || '';
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Modify the response if needed, but return the original response
        response.data = {
            data: response.data.data,
            meta: response.data.meta,
        };
        return response;
    },
    async (error: any) => {
        const config = error?.config;

        if (error.response?.status === 403 && !config.sent) {
            if (error?.response?.data?.accessToken) {
                localStorageService.setIntoLocalStorage(
                    'accessToken',
                    error.response.data.accessToken,
                );
            }
            config.sent = true;
            try {
                const accessToken =
                    error.response.data.accessToken ||
                    localStorageService.getFromLocalStorage('accessToken') ||
                    '';
                if (accessToken) {
                    localStorageService.setIntoLocalStorage(
                        'accessToken',
                        accessToken,
                    );
                    config.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosInstance(config);
                }
            } catch (refreshError) {
                if (
                    axios.isAxiosError(refreshError) &&
                    (refreshError.response?.status === 403 ||
                        refreshError.response?.status === 401)
                ) {
                    localStorageService.removeFromLocalStorage('accessToken');
                }
                return Promise.reject(refreshError);
            }
        } else {
            if (
                error.response?.status === 403 ||
                error.response?.status === 401
            ) {
                localStorageService.removeFromLocalStorage('accessToken');
            }

            const responseObject: IErrorObject = {
                statusCode: error.response?.status || 500,
                message:
                    error.response?.data?.message || 'Something went wrong',
                success: error.response?.data?.success || false,
                errorMessages: error.response?.data?.errorMessages || [],
            };

            return Promise.reject(responseObject);
        }
    },
);

export {axiosInstance};
