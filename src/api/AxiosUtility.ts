import axios, {AxiosInstance} from "axios";

const BASE_URL = 'https://illupy.ch:5000/api/v1/csgo/faceit/user/'
const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

export default defaultAxiosInstance;

export {BASE_URL}