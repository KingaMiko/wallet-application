import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { walletInstance } from 'utils/api';

//////////////////////////////////
////////// TRANSACTIONS //////////
//////////////////////////////////

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  async (params, thunkAPI) => {
    const defaultParams = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      limit: 10,
      page: 1,
    };

    const { year, month, limit, page } = params || defaultParams;

    try {
      const url = `/transactions?year=${year}&month=${month}&limit=${limit}&page=${page}`;
      const res = await walletInstance.get(url);
      return res.data;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.description
        : error.message;
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
      console.error('Błąd aktualizacji transakcji:', error);
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getFilteredTransactions = createAsyncThunk(
  'finance/getFilteredTransactions',
  async ({ year, month, limit, page }, thunkAPI) => {
    try {
      const validLimit = parseInt(limit, 10) || 10;
      const validPage = parseInt(page, 10) || 1;

      const response = await walletInstance.get(
        `/transactions?year=${year}&month=${month}&limit=${validLimit}&page=${validPage}`
      );
      return {
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.description
        : error.message;
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
