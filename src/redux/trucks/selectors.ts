import { Camper } from "../../types";
import { RootState } from "../store";

export const selectTrucks = (state: RootState): Camper[] => state.trucks.items;
export const selectTruckById = (state: RootState): Camper | null =>
  state.trucks.item;
export const selectTrucksLoading = (state: RootState): boolean =>
  state.trucks.loading;
export const selectTrucksError = (state: RootState): unknown =>
  state.trucks.error;
