import { getCampers } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_, thunkAPI) => {
        try {
            return await getCampers()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        };
    }
)