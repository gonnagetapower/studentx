import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import profileSlice from './slices/profileSlice'
import filterSlice from './slices/filterSlice';
import navSlice from './slices/navSlice';
import createTaskSlice from './slices/createTaskSlice';
import appSlice from './slices/appSlice';

export default configureStore({
    reducer: {
        app: appSlice,
        tasks: tasksReducer,
        profile: profileSlice,
        filter: filterSlice,
        nav: navSlice,
        create: createTaskSlice,
    },
})