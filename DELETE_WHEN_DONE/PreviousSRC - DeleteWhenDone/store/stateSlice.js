import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "data",
  initialState: {
    students: [],
    campuses: [],
  },
  reducers: {
    setStudents: (state, action) => {
      console.log("setStudents", state, action);
      state.students = action.payload;
    },
    setCampuses: (state, action) => {
      console.log("setCampuses", state, action);
      state.campuses = action.payload;
    },
  },
});

export const { setStudents, setCampuses } = stateSlice.actions;

export const setStudentsAsync = (data) => (dispatch) => {
  console.log("setStudentData", data);
  setTimeout(() => {
    dispatch(setStudents(data));
  }, 1000);
};

export const setCampusAsync = (data) => (dispatch) => {
  console.log("setCampusData", data);
  setTimeout(() => {
    dispatch(setCampuses(data));
  }, 1000);
};

export default stateSlice.reducer;
