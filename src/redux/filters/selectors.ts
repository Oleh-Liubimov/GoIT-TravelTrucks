import { RootState } from "../store";

export const selectFilterLocation = (state: RootState) =>
  state.filters.location;
export const selectFilterBodyType = (state: RootState) =>
  state.filters.bodyType;
export const selectFilterAmenities = (state: RootState) =>
  state.filters.amenities;
