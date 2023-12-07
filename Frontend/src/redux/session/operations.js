import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

// axios.defaults.baseURL = 'backend';
axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const setAuthHeaderFromLocalStorage = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
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
      // toast do testów, wykasować później
      toast.success('Success!');
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'session/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');

      res.data.token = persistedToken;
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
