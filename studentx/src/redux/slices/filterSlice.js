import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        discipline: "",
        town: "",
        institute: "",
        dateFrom: new Date(),
        dateTo: new Date(),
        price: "",
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
        },
        setDateFrom: (state, action) => {
            state.dateFrom = action.payload
        },
        setDateTo: (state, action) => {
            state.dateTo = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        }
    },
})

export const { setDiscipline, setTown, setInstitute, setDateFrom, setDateTo, setPrice } = filterSlice.actions;

export default filterSlice.reducer