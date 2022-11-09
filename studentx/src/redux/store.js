import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import profileSlice from './slices/profileSlice'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        profile: profileSlice,
    },
})