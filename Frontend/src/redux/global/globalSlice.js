import { createSlice } from '@reduxjs/toolkit';
import { getPatterns } from './operations';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isModalSettingsOpen: false,
  isModalConfirmDeleteOpen: false,
  isModalConfirmDeleteCategoryOpen: false,
  patterns: {
    passwordPattern: {
      pattern:
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=\\[\\]{}\'"\\|,.<>/?~\\\\])',
      description:
        'The password should contain at least one uppercase letter, one special character, and one digit',
    },
    namePattern: {
      pattern: '^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+$',
      description: 'Name can only contains letters',
    },
  },
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
    setIsModalConfirmDeleteCategoryOpen: (state, action) => {
      state.isModalConfirmDeleteCategoryOpen = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPatterns.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPatterns.fulfilled, (state, action) => {
        state.patterns = action.payload.data.patterns;
        state.isLoading = false;
      })
      .addCase(getPatterns.rejected, state => {
        state.patterns = {
          passwordPattern: { pattern: '', description: '' },
          namePattern: { pattern: '', description: '' },
        };
        state.isLoading = false;
      });
  },
});

export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
  setIsModalEditTransactionOpen,
  setIsModalSettingsOpen,
  setIsModalConfirmDeleteOpen,
  setIsModalConfirmDeleteCategoryOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
