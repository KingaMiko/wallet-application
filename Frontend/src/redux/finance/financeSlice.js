import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getStatistics,
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
  statistics: null,
  userCategories: [],
  categoryDetails: null,
  year: '',
  month: '',
  type: '',
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
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
        const index = state.items.findIndex(
          transaction => transaction.id === action.payload.id
        );
        state.transactions.splice(index, 1);
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedTransaction = action.payload;
        const index = state.transactions.findIndex(
          transaction => transaction.id === editedTransaction.id
        );
        if (index !== -1) {
          state.transactions[index] = editedTransaction;
        }
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.statistics = action.payload.data;
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
          category => category.id === action.payload.id
        );
        state.userCategories.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const { setYear, setMonth, setType } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
