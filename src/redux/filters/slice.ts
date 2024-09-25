import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper } from "../../types";

interface FiltersState {
  location: string;
  bodyType: string | null;
  amenities: (keyof Camper)[];
}

const initialState: FiltersState = {
  location: "",
  bodyType: null,
  amenities: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setBodyType: (state, action: PayloadAction<string | null>) => {
      state.bodyType = action.payload;
    },
    toggleAmenity: (state, action: PayloadAction<keyof Camper>) => {
      const index = state.amenities.indexOf(action.payload);
      if (index === -1) {
        state.amenities.push(action.payload);
      } else {
        state.amenities.splice(index, 1);
      }
    },
    resetFilters: (state) => {
      state.location = "";
      state.bodyType = null;
      state.amenities = [];
    },
  },
});

export const { setLocation, setBodyType, toggleAmenity } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
