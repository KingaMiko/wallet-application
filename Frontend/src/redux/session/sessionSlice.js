import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
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
      });
  },
});

export const sessionReducer = sessionSlice.reducer;
