import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper, GetAllTrucksResponse } from "../../types";
import { fetchTrucks, fetchTruckBuId } from "./operations";


export interface TrucksState {
  items: Camper[];
  item: Camper | null;
  loading: boolean;
  error: unknown;
}

const initState: TrucksState = {
  items: [],
  item: null,
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

// export const selectFilteredTrucks = createSelector(
//   [
//     selectTrucks,
//    selectFilters
//   ],
//   (
//    filters:string
//   ) => {
//     return trucks.filter((truck) => {
//       const matchesLocation = location
//         ? truck.location.toLowerCase().includes(location.toLowerCase())
//         : true;
//       const matchesBodyType = bodyType !== "" ? truck.form === bodyType : true;
//       const matchesAmenities =
//         amenities.length > 0
//           ? amenities.every((amenity) => truck[amenity])
//           : true;
//       return matchesLocation && matchesBodyType && matchesAmenities;
//     });
//   }
// );

const trucksSlice = createSlice({
  name: "trucks",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrucks.pending, handleLoading)
      .addCase(
        fetchTrucks.fulfilled,
        (state: TrucksState, action: PayloadAction<GetAllTrucksResponse>) => {
          state.loading = false;
          state.error = null;
          state.items = [...state.items, ...action.payload.items];
        }
      )
      .addCase(fetchTrucks.rejected, handleReject)
      .addCase(fetchTruckBuId.pending, handleLoading)
      .addCase(
        fetchTruckBuId.fulfilled,
        (state: TrucksState, action: PayloadAction<Camper>) => {
          state.loading = false;
          state.error = null;
          state.item = action.payload;
        }
      )
      .addCase(fetchTruckBuId.rejected, handleReject);
  },
});

export const trucksReducer = trucksSlice.reducer;
