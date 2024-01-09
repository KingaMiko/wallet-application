import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getFilteredTransactions,
  getAllUserCategories,
  getUserCategoryById,
  createCategory,
  deleteUserCategory,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const initialState = {
  isLoading: false,
  error: false,
  transactions: [],
  userCategories: [],
  categoryDetails: null,
  pagination: {
    total: 0,
    page: 1,
    totalPages: 0,
    limit: 10,
  },
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = action.payload.data;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.push(action.payload.data);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.findIndex(
          transaction => transaction.id === action.payload.id
        );
        if (index !== -1) {
          state.transactions.splice(index, 1);
        }
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedTransaction = action.payload;
        const index = state.transactions.findIndex(
          transaction => transaction._id === editedTransaction._id
        );
        if (index !== -1) {
          state.transactions[index] = editedTransaction;
        }
      })
      .addCase(getFilteredTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(getAllUserCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userCategories = action.payload.data;
      })
      .addCase(getUserCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.userCategories.findIndex(
          category => category.id === action.payload.data.id
        );
        state.categoryDetails = state.userCategories[index];
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userCategories.push(action.payload.data);
      })
      .addCase(deleteUserCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.userCategories.findIndex(
          category => category._id === action.payload
        );
        state.userCategories.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const financeReducer = financeSlice.reducer;
