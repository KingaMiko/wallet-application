import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
