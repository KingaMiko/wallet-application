import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'backend';
axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'session/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
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
      const res = await axios.post('/auth/signin', credentials);
      setAuthHeader(res.token);
      return res.data;
    } catch (error) {
      // obsługa error
      alert('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setAuthHeaderFromLocalStorage = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

/*
 * GET @ /logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'session/logout',
  async (_, thunkAPI) => {
    setAuthHeaderFromLocalStorage();
    try {
      await axios.get('/auth/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
