import { getCamperById, getCampers } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
        const data = await getCampers(filters);
        

      return {
        ...data,
        page: filters.page || 1,
      };
    } catch (error) {
      if (error.response?.status === 404) {
        return {
          items: [],
          total: 0,
          page: filters.page || 1,
        };
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
    'campers/fetchById',
    async (id, thunkAPI) => {
        try {
            return await getCamperById(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)