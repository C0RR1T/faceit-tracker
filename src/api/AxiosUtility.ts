import axios, {AxiosInstance} from "axios";
import KEY from "./SECRETS";

const BASE_URL = 'https://open.faceit.com/data/v4/'
const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${KEY}`
    }
});

export default defaultAxiosInstance;

export {BASE_URL}