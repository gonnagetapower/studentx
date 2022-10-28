import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})