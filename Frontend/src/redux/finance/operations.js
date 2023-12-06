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
