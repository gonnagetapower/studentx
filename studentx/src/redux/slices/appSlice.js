import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        lastWatch: [],
    },
    reducers: {
        setLastWatch: (state, action) => {
            state.lastWatch = [...state.lastWatch, action.payload]
        }
    },
})

export const { setLastWatch } = appSlice.actions;

export default appSlice.reducer