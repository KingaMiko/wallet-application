import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { walletInstance } from 'utils/api';

//////////////////////////////////
////////// TRANSACTIONS //////////
//////////////////////////////////

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  async (_, thunkAPI) => {
    try {
      const res = await walletInstance.get('/transactions');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const res = await walletInstance.post('/transactions', transaction);
      toast.success('Success!');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (transactionID, thunkAPI) => {
    try {
      const res = await walletInstance.delete(`/transactions/${transactionID}`);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'finance/updateTransaction',
  async ({ transactionID, ...transactionDetails }, thunkAPI) => {
    try {
      const res = await walletInstance.patch(`/transactions/${transactionID}`, {
        ...transactionDetails,
      });
      toast.success('Success!');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

////////////////////////////////
////////// CATEGORIES //////////
////////////////////////////////

export const getAllUserCategories = createAsyncThunk(
  'finance/getAllUserCategories',
  async (_, thunkAPI) => {
    try {
      const res = await walletInstance.get('/categories');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getUserCategoryById = createAsyncThunk(
  'finance/getUserCategoryById',
  async (categoryID, thunkAPI) => {
    try {
      const res = await walletInstance.get(`/categories/${categoryID}`);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const createCategory = createAsyncThunk(
  'finance/createCategory',
  async ({ name, type }, thunkAPI) => {
    try {
      const res = await walletInstance.post('/categories', { name, type });
      toast.success('Success!');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteUserCategory = createAsyncThunk(
  'finance/deleteUserCategory',
  async (categoryID, thunkAPI) => {
    try {
      await walletInstance.delete(`/categories/${categoryID}`);
      toast.success('Success!');
      return categoryID;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
