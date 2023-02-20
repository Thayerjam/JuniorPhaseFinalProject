import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk("students", async () => {
  try {
    const { data } = await axios.get(`/api/students/`);
    return data;
  } catch (err) {
    console.log("Error in studentSlice.js fetchAllStudents");
    console.error(err);
    throw err;
  }
});

export const deleteStudentAsync = createAsyncThunk("students/deleteStudent", async (studentId) => {
  try {
    const { data } = await axios.delete(`/api/students/${studentId}`);
    return data;
  } catch (err) {
    console.log("Error in studentSlice.js deleteStudentAsync");
    console.error(err);
    throw err;
  }
});

export const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      return [...state, action.payload.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentSlice.reducer;
export const { updateState } = studentSlice.actions;
