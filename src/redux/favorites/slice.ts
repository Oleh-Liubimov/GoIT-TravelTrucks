import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper } from "../../types";

interface FavoritesState {
  items: Camper[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Camper>) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((truck) => truck.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
