interface IEnv {
  publicApi: string;
}

const envConfig: IEnv = {
  publicApi: import.meta.env.VITE_PUBLIC_API || "http://localhost:5000",
};


export default envConfig