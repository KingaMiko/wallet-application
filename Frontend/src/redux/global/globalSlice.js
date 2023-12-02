import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    isModalLogoutOpen: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
    isModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
    isModalEditTransactionOpen: (state, action) => {
      state.isModalEditTransactionOpen = action.payload;
    },
  },
});

export const {
  isLoading,
  isModalLogoutOpen,
  isModalAddTransactionOpen,
  isModalEditTransactionOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
