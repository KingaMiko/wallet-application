import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getPatterns = createAsyncThunk(
  'global/getPatterns',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/patterns');

      return res.data.data.patterns;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
