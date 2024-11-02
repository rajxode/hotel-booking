
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASEURL}/api`
})

export default axiosInstance;