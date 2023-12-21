import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://task-management-platform-server-chi.vercel.app'
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios