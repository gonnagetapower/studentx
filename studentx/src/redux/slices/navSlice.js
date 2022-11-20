import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        activeIcon: "main",
    },
    reducers: {
        setActiveIcon: (state, action) => {
            state.activeIcon = action.payload
        }
    },
})

export const { setActiveIcon } = navSlice.actions;

export default navSlice.reducer