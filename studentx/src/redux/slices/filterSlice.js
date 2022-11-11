import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        discipline: "",
        town: "",
        institute: "",
    },
    reducers: {
        setDiscipline: (state, action) => {
            state.discipline = action.payload
        },
        setTown: (state, action) => {
            state.town = action.payload
        },
        setInstitute: (state, action) => {
            state.institute = action.payload
        }
    },
})

export const { setDiscipline, setTown, setInstitute } = filterSlice.actions;

export default filterSlice.reducer