import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasksStatus',
    async (params) => {
        const { currentPage, disciplineQuery, instituteQuery } = params;
        const res = await axios.get(
            `https://mtimofeev.fun/api/v2/tasks?${disciplineQuery}${instituteQuery}imit=5&page=${currentPage}`
        );
        return res.data
    }
)

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        firstFetch: true,
        status: "loading", // loading | success | error,
        currentPage: 1,
        refreshStatus: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setCurrentPage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        setRefreshStatus: (state, action) => {
            state.refreshStatus = action.payload
        }
    },
    extraReducers: {
        [fetchTasks.pending]: (state, action) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchTasks.fulfilled]: (state, action) => {
            // state.items.push(...action.payload)
            state.items = [...action.payload]
            state.firstFetch = false;
            state.status = 'success';
        },
        [fetchTasks.rejected]: (state, action) => {
            state.items = [];
            state.status = 'error'
        },
    }
})

export const { setItems, setCurrentPage, setRefreshStatus } = tasksSlice.actions;

export default tasksSlice.reducer