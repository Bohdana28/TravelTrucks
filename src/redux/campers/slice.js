import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";


const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        total: 0,
        currentCamper: null,
        loading: false,
        overlayLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCampers.pending, (state, action) => {
            state.loading = true;
            state.error = null;

            const page = action.meta.arg?.page || 1;
        
            if (page === 1 && state.items.length > 0) {
            state.overlayLoading = true;
            }

            if (page === 1) {
            state.items = [];
            state.total = 0;
            }

      }).addCase(fetchCampers.fulfilled, (state, action) => {
            if (action.payload.page === 1) {
            state.items = action.payload.items;
            } else {
            state.items.push(...action.payload.items);
            }

            state.total = action.payload.total;
            state.loading = false;
            state.overlayLoading = false;
            state.error = null;
        }).addCase(fetchCampers.rejected, (state, action) => {
            state.loading = false;
            state.overlayLoading = false;
            state.error = action.payload || action.error.message;
        }).addCase(fetchCamperById.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchCamperById.fulfilled, (state, action) => {
            state.currentCamper = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(fetchCamperById.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        
    },
});


export const campersReducer = campersSlice.reducer;