import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";

const store = configureStore({
  reducers: {
    data: stateReducer,
  },
});

export default store;
