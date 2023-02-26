import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bridge from '@vkontakte/vk-bridge';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        service: "Works",
        myProfile: '',
    },
    reducers: {
        setService: (state, action) => {
            state.service = action.payload
        },
        setMyProfile: (state, action) => {
            state.myProfile = action.payload
        }
    },
})

export const {setMyProfile,  setService } = profileSlice.actions;

export default profileSlice.reducer