import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
