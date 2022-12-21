import { createSlice } from "@reduxjs/toolkit";

export const createTaskSlice = createSlice({
    name: 'createTask',
    initialState: {
        title: '',
        descr: '',
        price: '',
        discipline: '',
        institute: '',
    },
    reducers: {
        setFormValues: (state, action) => {
            state.title = action.payload.title
            state.descr = action.payload.descr
            state.price = action.payload.price
        },
        setTaskDiscipline: (state, action) => {
            state.discipline = action.payload
        },
        setTaskInstitute: (state, action) => {
            state.institute = action.payload
        }
    },
})

export const { setFormValues, setTaskDiscipline, setTaskInstitute } = createTaskSlice.actions;

export default createTaskSlice.reducer