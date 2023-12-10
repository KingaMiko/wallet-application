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
      // toast do testów, wykasować później
      toast.success('Success!');
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
      // toast do testów, wykasować później
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
      // toast do testów, wykasować później
      toast.success('Success!');
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
      // toast do testów, wykasować później
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
////////// STATISTICS //////////
////////////////////////////////

export const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async (requestData, thunkAPI) => {
    try {
      const res = await walletInstance.post('/statistics');
      // toast do testów, wykasować później
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
      // toast do testów, wykasować później
      toast.success('Success!');
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
      // toast do testów, wykasować później
      toast.success('Success!');
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
      // toast do testów, wykasować później
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
      const res = await walletInstance.delete(`/categories/${categoryID}`);
      // toast do testów, wykasować później
      toast.success('Success!');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
