import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";


export const login = createAsyncThunk(
    'app/login',
    async (username,password) => {
        const res = await AuthService.login(username,password);
        localStorage.setItem('token', res.data.access)
        return res.data
    }
)

export const registration = createAsyncThunk(
    'app/registration',
    async (username,password) => {
        const res = await AuthService.registration(username, "12345");
        return res.data.username
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: 0,
        isAuth: false,
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
    extraReducers: {
        [registration.pending]: (state, action) => {
            console.log('loading')
        },
        [registration.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isAuth = true;
        },
        [registration.rejected]: (state, action) => {
            console.log('error')
        },
    }
})

export const { setLastWatch, setJwtToken } = appSlice.actions;

export default appSlice.reducer