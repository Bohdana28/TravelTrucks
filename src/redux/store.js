import { campersReducer } from "./campers/slice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
    },
})