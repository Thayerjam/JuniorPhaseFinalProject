import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCampus = createAsyncThunk("singleCampus", async (campusId) => {
  try {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    return data;
  } catch (err) {
    console.log("Error in singleCampusSlice.js fetchSingleCampus");
    console.error(err);
    throw err;
  }
});

export const editCampusAsync = createAsyncThunk("editCampus", async (campus) => {
  const { name, address, campusId } = campus;

  const editCampus = {
    name,
    address,
  };
  try {
    const { data } = await axios.put(`/api/campuses/${campusId}`, editCampus);
    return data;
  } catch (err) {
    console.log("Error in singleCampusSlice.js editCampusAsync");
    console.error(err);
    throw err;
  }
});

export const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;
