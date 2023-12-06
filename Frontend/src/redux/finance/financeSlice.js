import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from './operations';

const initialState = {
  isLoading: false,
  error: false,
  transactions: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload.data;
      })
      .addCase(getTransactions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const financeReducer = financeSlice.reducer;
