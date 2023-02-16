import axios from "axios";

const $auth = axios.create({
    baseURL: 'https://mtimofeev.fun/'
})

$auth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $auth;