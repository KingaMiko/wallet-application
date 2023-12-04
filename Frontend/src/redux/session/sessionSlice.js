import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  error: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
