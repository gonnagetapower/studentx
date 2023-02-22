import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bridge from '@vkontakte/vk-bridge';

export const fetchMe = createAsyncThunk(
    'profile/fetchMeStatus',
    async () => {
        const user = await bridge.send('VKWebAppGetUserInfo');
        return user;
    }
)

// export const registration = createAsyncThunk(
//     'app/registration',
//     async (username,password) => {
//         const res = await AuthService.registration(username, "12345");
//         return res.data.username
//     }
// )


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
    extraReducers: {
        [fetchMe.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchMe.fulfilled]: (state, action) => {
            state.myProfile = action.payload
            state.status = 'success';
        },
        [fetchMe.rejected]: (state, action) => {
            state.status = 'error'
        },
    }
})

export const { setService } = profileSlice.actions;

export default profileSlice.reducer