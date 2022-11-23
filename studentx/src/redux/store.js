import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import profileSlice from './slices/profileSlice'
import filterSlice from './slices/filterSlice';
import navSlice from './slices/navSlice';
import createTaskSlice from './slices/createTaskSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        profile: profileSlice,
        filter: filterSlice,
        nav: navSlice,
        create: createTaskSlice,
    },
})