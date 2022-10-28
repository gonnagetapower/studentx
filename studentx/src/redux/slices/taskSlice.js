import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasksStatus',
    async() => {
        const res = await axios.get(
            `https://635c0281fc2595be263e82f3.mockapi.io/tasks`
        );
        return res.data
    }
)

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: "loading", // loading | success | error
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchTasks.pending]: (state, action) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchTasks.rejected]: (state, action) => {
            state.items = [];
            state.status = 'error'
        },
    }
})

export const { setItems } = tasksSlice.actions;

export default tasksSlice.reducer