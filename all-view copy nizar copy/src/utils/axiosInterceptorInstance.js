import axios from 'axios';

const axiosInterceptorInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1', // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {

        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        // If token is present, add it to request's Authorization Header
        if (username) {
            if (config.headers) {
                config.headers.username = username;
            }
        }

        if (password) {
            if (config.headers) {
                config.headers.password = password;
            }
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;