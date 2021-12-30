import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default axios;