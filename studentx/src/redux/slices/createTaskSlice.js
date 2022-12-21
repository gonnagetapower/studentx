import { createSlice } from "@reduxjs/toolkit";

export const createTaskSlice = createSlice({
    name: 'createTask',
    initialState: {
        title: '',
        descr: '',
        price: '',
        discipline: '',
        institute: '',
        photoList: [],
        publish: false
    },
    reducers: {
        setFormValues: (state, action) => {
            state.title = action.payload.title
            state.descr = action.payload.descr
            state.price = action.payload.price
        },
        setPhotoList: (state, action) => {
            state.photoList = action.payload
        },
        setTaskDiscipline: (state, action) => {
            state.discipline = action.payload
        },
        setTaskInstitute: (state, action) => {
            state.institute = action.payload
        },
        setPublish: (state) => {
            state.publish = !state.publish
        }
    },
})

export const { setFormValues, setTaskDiscipline, setTaskInstitute, setPhotoList, setPublish } = createTaskSlice.actions;

export default createTaskSlice.reducer