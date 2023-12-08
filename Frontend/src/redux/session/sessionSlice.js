import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, refreshUser } from './operations';

const setIsAuthState = (state, action) => {
  state.isRefreshing = false;
  state.user = action.payload.data;
  state.token = action.payload.token;
  state.isAuth = true;
};

const setIsUnauthState = state => {
  state.isRefreshing = false;
  state.user = null;
  state.token = null;
  state.isAuth = false;
};

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
      .addCase(signIn.fulfilled, setIsAuthState)
      .addCase(signIn.rejected, setIsUnauthState)
      .addCase(logOut.fulfilled, setIsUnauthState)
      .addCase(logOut.rejected, setIsUnauthState)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, setIsAuthState)
      .addCase(refreshUser.rejected, setIsUnauthState);
  },
});

export const sessionReducer = sessionSlice.reducer;
