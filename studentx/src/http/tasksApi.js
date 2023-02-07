import { $authHost, $host } from './api'


export const fetchTasksAPI = async () => {
    const { data } = await $host.get('tasks')
    return data;
}

export const createTaskAPI = async (task) => {
    const { data } = await $authHost.post('tasks', task)
    return data;
}