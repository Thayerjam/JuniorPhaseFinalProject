import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "./storeSlices/campusesSlice";
import singleStudentSlice from "./storeSlices/singleStudentSlice";
import singleCampusSlice from "./storeSlices/singleCampusSlice";
import studentsSlice from "./storeSlices/studentsSlice";

const store = configureStore({
  reducer: {
    students: studentsSlice,
    campuses: campusesSlice,
    singleStudent: singleStudentSlice,
    singleCampus: singleCampusSlice,
  },
});

export default store;
