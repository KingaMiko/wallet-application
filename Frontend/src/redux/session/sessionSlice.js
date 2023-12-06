import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  error: false,
  isRefreshing: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuth = true;
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
