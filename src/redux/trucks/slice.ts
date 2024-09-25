import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper, GetAllTrucksResponse } from "../../types";
import { fetchAllTrucks, fetchTruckBuId } from "./operations";
import { selectTrucks } from "./selectors";
import {
  selectFilterAmenities,
  selectFilterBodyType,
  selectFilterLocation,
} from "../filters/selectors";

export interface TrucksState {
  items: Camper[];
  loading: boolean;
  error: unknown;
}

const initState: TrucksState = {
  items: [],
  loading: false,
  error: null,
};

const handleLoading = (state: TrucksState) => {
  state.loading = true;
};

const handleReject = (state: TrucksState, action: PayloadAction<unknown>) => {
  state.loading = false;
  state.error = action.payload;
};

export const selectFilteredTrucks = createSelector(
  [
    selectTrucks,
    selectFilterLocation,
    selectFilterBodyType,
    selectFilterAmenities,
  ],
  (
    trucks: Camper[],
    location: string,
    bodyType: string | null,
    amenities: (keyof Camper)[]
  ) => {
    return trucks.filter((truck) => {
      const matchesLocation = location
        ? truck.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesBodyType = bodyType !== "" ? truck.form === bodyType : true;
      const matchesAmenities =
        amenities.length > 0
          ? amenities.every((amenity) => truck[amenity])
          : true;
      return matchesLocation && matchesBodyType && matchesAmenities;
    });
  }
);

const trucksSlice = createSlice({
  name: "trucks",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllTrucks.pending, handleLoading)
      .addCase(
        fetchAllTrucks.fulfilled,
        (state: TrucksState, action: PayloadAction<GetAllTrucksResponse>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload.items;
        }
      )
      .addCase(fetchAllTrucks.rejected, handleReject)
      .addCase(fetchTruckBuId.pending, handleLoading)
      .addCase(
        fetchTruckBuId.fulfilled,
        (state: TrucksState, action: PayloadAction<Camper>) => {
          state.loading = false;
          state.error = null;
          state.items = state.items.map((truck) =>
            truck.id === action.payload.id ? action.payload : truck
          );
        }
      )
      .addCase(fetchTruckBuId.rejected, handleReject);
  },
});

export const trucksReducer = trucksSlice.reducer;
