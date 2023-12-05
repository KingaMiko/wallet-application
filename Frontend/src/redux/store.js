import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/globalSlice';
import { sessionReducer } from './session/sessionSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    session: sessionReducer,
  },
});
