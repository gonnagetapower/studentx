import axios from 'axios'
// import { useSelector } from 'react-redux'

// const jwtToken = useSelector((state) => state.app.jwtToken)

const $host = axios.create({
    baseURL: 'http://mtimofeev.fun/api/v2/'
})

const $authHost = axios.create({
    baseURL: 'http://mtimofeev.fun/api/v2/'
})

const authInterceptor = config => {
    // config.headers.authorization = `Bearer ${localStorage.getItem('token')}` vk storage
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
}