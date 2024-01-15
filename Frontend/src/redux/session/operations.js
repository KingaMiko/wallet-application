import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { walletInstance } from 'utils/api';

const setAuthHeader = token => {
  walletInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  walletInstance.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'session/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await walletInstance.post('/auth/signup', credentials);
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
      const res = await walletInstance.post('/auth/signin', credentials);
      localStorage.setItem('accessToken', res.data.token);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      setAuthHeader(res.data.token);
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
    try {
      await walletInstance.get('/auth/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    const persistedToken = localStorage.getItem('refreshToken');

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await walletInstance.post('/auth/refresh', {
        refreshToken: persistedToken,
      });
      localStorage.setItem('accessToken', res.data.token);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const getUserDetails = createAsyncThunk(
  'session/getUserDetails',
  async (_, thunkAPI) => {
    try {
      const res = await walletInstance.get('/users/current');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.description;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
