import { $authHost, $host } from './api'


export const fetchTasksAPI = async () => {
    const { data } = await $host.get('api/v2/tasks')
    return data;
}

export const createTaskAPI = async (task) => {
    const { data } = await $authHost.post('api/v2/tasks', task)
    return data;
}