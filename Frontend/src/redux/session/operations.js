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
      setAuthHeader(res.data.token);
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
    try {
      await walletInstance.get('/auth/logout');
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
      const res = await walletInstance.get('/users/current');

      res.data.token = persistedToken;

      return res.data;
    } catch (error) {
      const message = error.response.data.description;

      if (message === 'Access expired') {
        const checkThis = await walletInstance.post('/auth/refresh');

        if (checkThis.data.token) {
          setAuthHeader(checkThis.data.token);

          return checkThis.data;
        }
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
