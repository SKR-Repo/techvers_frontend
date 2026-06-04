import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, 
    
    timeout: 10000, 
    
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    
});

axiosInstance.interceptors.request.use(
    (config) => {      
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorMessage = error.response?.data?.message || error.message || 'An unexpected error occurred';
        
        if (process.env.NODE_ENV === 'development') {
            console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`, errorMessage);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;