import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampusList = createAsyncThunk("campuses", async () => {
  try {
    const { data } = await axios.get("/api/campuses/");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (campusId) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      return [...state, action.payload.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampusList.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      return state.filter((campus) => campus.id !== action.payload.id);
    });
  },
});

export const selectCampus = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
export const { updateState } = campusesSlice.actions;
