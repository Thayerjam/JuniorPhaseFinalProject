import studentSlice from "../features/studentSlice";
import singleStudentSlice from "../features/singleStudentSlice";
import singleCampusSlice from "../features/singleCampusSlice";
import campusSlice from "../features/campusSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    students: studentSlice,
    campuses: campusSlice,
    singleStudent: singleStudentSlice,
    singleCampus: singleCampusSlice,
  },
});

export default store;
