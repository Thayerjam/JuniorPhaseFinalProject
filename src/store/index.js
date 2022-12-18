import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './stateSlice';

const store = configureStore({
  reducer: {
    data: stateReducer
  }
});

export default store;
