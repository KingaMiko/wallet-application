import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  getUserDetails,
} from './operations';

const setAuthStatus = (state, action) => {
  state.isAuth = true;
  state.user = action.payload.data;
  state.isRefreshing = false;
};

const unsetAuthState = state => {
  state.isAuth = false;
  state.user = null;
  state.isRefreshing = false;
};

const initialState = {
  isAuth: false,
  user: { name: null, email: null },
  isRefreshing: false,
  error: false,
  userDetails: null,
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
      .addCase(signIn.fulfilled, setAuthStatus)
      .addCase(signIn.rejected, unsetAuthState)
      .addCase(logOut.fulfilled, unsetAuthState)
      .addCase(logOut.rejected, unsetAuthState)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, setAuthStatus)
      .addCase(refreshUser.rejected, unsetAuthState)
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload.data;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.userDetails = null;
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
