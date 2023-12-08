import { createAsyncThunk } from '@reduxjs/toolkit';

import { walletInstance } from 'utils/api';

export const getPatterns = createAsyncThunk(
  'global/getPatterns',
  async (_, thunkAPI) => {
    try {
      const res = await walletInstance.get('/patterns');
      return res.data;
      throw new Error('error');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
