interface IEnv {
    baseAPI: string;
}

const envConfig: IEnv = {
    baseAPI: import.meta.env.VITE_BASE_API || 'http://localhost:5000/api/v1',
};

export default envConfig;
