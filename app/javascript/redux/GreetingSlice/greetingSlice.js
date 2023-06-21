import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  greeting: null,
  isLoading: false,
};

const BASE_URL = "http://localhost:3000/greetings";

export const fetchGreeting = createAsyncThunk(
  "greetings/fetchgreetings",
  async (_, thunkAPI) => {
    try {
      const response = await axios(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Greeting could not be fetched");
    }
  }
);
const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.greeting = payload.message;
    });
    builder.addCase(fetchGreeting.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.greeting = payload.message;
    });
  },
});

export default greetingSlice.reducer;
