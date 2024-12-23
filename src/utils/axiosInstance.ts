
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASEURL}/api`,
    withCredentials: true
})

export default axiosInstance;