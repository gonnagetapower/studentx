import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        service: "Works",
    },
    reducers: {
        setService: (state, action) => {
            state.service = action.payload
        }
    },
})

export const { setService } = profileSlice.actions;

export default profileSlice.reducer