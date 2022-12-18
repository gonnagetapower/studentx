import { createSlice } from "@reduxjs/toolkit";

export const createTaskSlice = createSlice({
    name: 'createTask',
    initialState: {
        title: '',
        descr: '',
        price: '',
    },
    reducers: {
        setFormValues: (state, action) => {
            state.title = action.payload.title
            state.descr = action.payload.descr
            state.price = action.payload.price
        }
    },
})

export const { setFormValues } = createTaskSlice.actions;

export default createTaskSlice.reducer