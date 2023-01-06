import { $host } from './api'


export const fetchTasksAPI = async () => {
    const { data } = await $host.get('tasks?format=json')
    return data
}