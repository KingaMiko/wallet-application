import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'backend';
axios.defaults.baseURL = 'http://localhost:3000/api';

/*
 * POST @ /signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'session/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/signup', credentials);
      return res.data;
    } catch (error) {
      // obsługa error
      alert('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
