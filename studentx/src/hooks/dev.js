import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://635c0281fc2595be263e82f3.mockapi.io'
})

export const getPostsPage = async(pageParam = 1, options = {}) => {
    const response = await api.get(`/tasks?page=${pageParam}%limit=2`, options)
    return response.data
}