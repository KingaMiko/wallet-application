import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'backend';
axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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

/*
 * POST @ /login
 * body: { email, password }
 */
export const signIn = createAsyncThunk(
  'session/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/signin', credentials);
      setAuthHeader(res.data.token);
      alert('logged in');
      return res.data;
    } catch (error) {
      // obsługa error
      alert('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
