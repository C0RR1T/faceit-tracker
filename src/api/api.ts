import axios from "axios";

export default axios.create({
    baseURL: 'https://developers.faceit.com/api/v4/'
});