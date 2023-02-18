import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import bridge from '@vkontakte/vk-bridge';


export const login = createAsyncThunk(
    'app/login',
    async (username,password) => {
        const res = await AuthService.login(username,"12345");
        await bridge
        .send('VKWebAppStorageSet', {
          key: 'login',
          value: 'true',
        })
        .then((data) => {
          if (data.result) {
            localStorage.setItem('tokenAccess', res.data.access)
            localStorage.setItem('tokenRefresh', res.data.refresh)
          }
        });
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

export const check = createAsyncThunk(
    'app/check',
    async (token) => {
        const res = await AuthService.refresh(token)
        localStorage.setItem('tokenAccess', res.data.access)
        console.log('поменял токен')
        return res.data.access;
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