import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucks/slice";
import favoritesReducer from "./favorites/slice";
import { filtersReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
