import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'store/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
});
