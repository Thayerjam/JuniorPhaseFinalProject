import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudentList = createAsyncThunk("students", async () => {
  try {
    const { data } = await axios.get("/api/students/");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const deleteStudentAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (studentId) => {
    try {
      const { data } = await axios.delete(`/api/students/${studentId}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      return [...state, action.payload.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudentList.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      return state.filter((student) => student.id !== action.payload.id);
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;
export const { updateState } = studentsSlice.actions;
