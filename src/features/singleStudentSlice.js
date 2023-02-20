import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleStudent = createAsyncThunk("singleStudent", async (studentId) => {
  try {
    const { data } = await axios.get(`/api/students/${studentId}`);
  } catch (err) {
    console.log("Error in singleStudentSlice.js fetchSingleStudent");
    console.error(err);
    throw err;
  }
});

export const editStudentAsync = createAsyncThunk("editStudent", async (student) => {
  const { firstName, lastName, email, imageUrl, gpa, studentId } = student;

  const editStudent = {
    firstName,
    lastName,
    email,
    imageUrl,
    gpa,
  };

  try {
    const { data } = await axios.put(`/api/students/${studentId}`, editStudent);
    return data;
  } catch (err) {
    console.log("Error in singleStudentSlice.js editStudentAsync");
    console.error(err);
    throw err;
  }
});

export const unregisterStudentAsync = createAsyncThunk("unregisterStudent", async ({ studentId, campusId }) => {
  try {
    const { data } = await axios.put(`/api/students/${studentId}`, {
      campusId,
    });
    return data;
  } catch (err) {
    console.log("Error in singleStudentSlice.js unregisterStudentAsync");
    console.error(err);
    throw err;
  }
});

export const registerStudentAsync = createAsyncThunk("registerStudent", async ({ studentId, campusId }) => {
  try {
    const { data } = await axios.put(`/api/students/${campusId}`, {
      studentId,
    });
    return data;
  } catch (err) {
    console.log("Error in singleStudentSlice.js registerStudentAsync");
    console.error(err);
    throw err;
  }
});

export const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(unregisterStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(registerStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;
