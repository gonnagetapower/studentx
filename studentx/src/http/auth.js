import axios from "axios";

const $auth = axios.create({
    baseURL: 'https://mtimofeev.fun/'
})

$auth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tokenAccess')}`
    return config;
})

$auth.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`https://mtimofeev.fun/auth/jwt/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.access);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $auth;