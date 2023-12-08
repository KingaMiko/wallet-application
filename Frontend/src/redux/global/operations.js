import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPatterns = createAsyncThunk(
  'global/getPatterns',
  async (_, thunkAPI) => {
    try {
      //const res = await axios.get('/patterns');
      throw Error("error");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
