import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { GetAllTrucksResponse } from "../../types";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk<
  GetAllTrucksResponse,
  { page?: number; limit?: number; filters?: string }
>("trucks/fetch", async ({ page, limit, filters }, thunkAPI) => {
  try {
    if (filters) {
      const response = await axios.get(
        `/campers?page=${page}&limit=${limit}&${filters}`
      );
      return response.data;
    } else {
      const response = await axios.get(`/campers?page=${page}&limit=${limit}`);
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const fetchTruckBuId = createAsyncThunk(
  "trucks/fetchById",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      let errorMessage = "Something went wrong";
      if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data?.message || error.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
