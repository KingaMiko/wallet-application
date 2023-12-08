import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

// axios.defaults.baseURL = 'backend';
axios.defaults.baseURL = 'http://localhost:3000/api';

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transactions');
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
      const res = await axios.post('/transactions', transaction);
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
      const res = await axios.delete(`/transactions/${transactionID}`);
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
      const res = await axios.patch(`/transactions/${transactionID}`, {
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

export const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/statistics');
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

export const getAllUserCategories = createAsyncThunk(
  'finance/getAllUserCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/categories');
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
      const res = await axios.get(`/categories/${categoryID}`);
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
  async ({ name, userId }, thunkAPI) => {
    try {
      const res = await axios.post('/categories', { name, userId });
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
      const res = await axios.delete(`/categories/${categoryID}`);
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
