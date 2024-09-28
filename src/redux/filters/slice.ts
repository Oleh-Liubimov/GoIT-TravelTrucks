import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
 filters:string
}

const initialState: FiltersState = {
  filters:""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = ''
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
