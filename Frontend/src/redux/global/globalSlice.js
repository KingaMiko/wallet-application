import { createSlice } from '@reduxjs/toolkit';
//import { getPatterns } from './operations';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isModalSettingsOpen: false,
  isModalConfirmDeleteOpen: false,
  patterns: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsModalLogoutOpen: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
    setIsModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
    setIsModalEditTransactionOpen: (state, action) => {
      state.isModalEditTransactionOpen = action.payload;
    },
    setIsModalSettingsOpen: (state, action) => {
      state.isModalSettingsOpen = action.payload;
    },
    setIsModalConfirmDeleteOpen: (state, action) => {
      state.isModalConfirmDeleteOpen = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(getPatterns.pending, state => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getPatterns.fulfilled, (state, action) => {
  //       state.patterns = action.payload.data.patterns;
  //       state.isLoading = false;
  //     })
  //     .addCase(getPatterns.rejected, state => {
  //       state.patterns = {
  //         passwordPattern: { pattern: '', description: '' },
  //         namePattern: { pattern: '', description: '' },
  //       };
  //       state.isLoading = false;
  //     });
  // },
});

export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
  setIsModalEditTransactionOpen,
  setIsModalSettingsOpen,
  setIsModalConfirmDeleteOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
