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
      .addCase(signIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(signIn.rejected, state => {
        state.isRefreshing = false;
        state.user = null;
        state.token = null;
        state.isAuth = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.user = null;
        state.token = null;
        state.isAuth = false;
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
