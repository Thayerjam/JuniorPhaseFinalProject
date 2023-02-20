import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCampuses = createAsyncThunk("campuses", async () => {
  try {
    const { data } = await axios.get(`/api/campuses/`);
    return data;
  } catch (err) {
    console.log("Error in campusSlice.js fetchAllCampuses");
    console.error(err);
    throw err;
  }
});

export const deleteCampusAsync = createAsyncThunk("campuses/deleteCampus", async (campusId) => {
  try {
    const { data } = await axios.delete(`/api/campuses/${campusId}`);
    return data;
  } catch (err) {
    console.log("Error in campusSlice.js deleteCampusAsync");
    console.error(err);
    throw err;
  }
});

export const campusSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      return [...state, action.payload.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCampuses.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      return state.filter((campus) => campus.id !== action.payload.id);
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusSlice.reducer;
export const { updateState } = campusSlice.actions;
