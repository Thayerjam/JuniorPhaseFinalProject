import studentSlice from "../features//students/studentSlice";
import singleStudentSlice from "../features/singleStudent/singleStudentSlice";
import singleCampusSlice from "../features/singleCampus/singleCampusSlice";
import campusSlice from "../features/campuses/campusSlice";
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
