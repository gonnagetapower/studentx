import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        lastWatch: [],
        jwtToken: [],
    },
    reducers: {
        setLastWatch: (state, action) => {
            state.lastWatch = [...state.lastWatch, action.payload]
        },
        setJwtToken: (state, action) => {
            state.jwtToken = action.payload
        }
    },
})

export const { setLastWatch, setJwtToken } = appSlice.actions;

export default appSlice.reducer