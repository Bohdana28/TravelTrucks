import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        form: '',
        equipment: [],
    },
    reducers: {
        setFilters: (state, action) => {
            state.location = action.payload.location;
            state.form = action.payload.form;
            state.equipment = action.payload.equipment;
        }
    }
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
