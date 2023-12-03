import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
  },
});

export const sessionReducer = sessionSlice.reducer;
