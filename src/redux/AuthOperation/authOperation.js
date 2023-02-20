import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registredUser = createAsyncThunk(
  'auth/register',
  async newUserData => {
    try {
      const { data } = await axios.post('/users/signup', newUserData);
      console.log('🚀  data', data);
      token.set(data.token);
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const logInUser = createAsyncThunk('auth/login', async existUserData => {
  try {
    const { data } = await axios.post('/users/login', existUserData);
    token.set(data.token);
    return data;
  } catch (error) {
    return error;
  }
});
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return error;
  }
});
export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localStorageToken = state.auth.token;
    if (localStorageToken === null) {
      return thunkAPI.rejectWithValue('Please sign up');
      // return state;
    }
    token.set(localStorageToken);
    try {
      const { data } = await axios.get('/users/current');

      console.log('🚀  data', data);
      return data;
    } catch (error) {
      return error;
    }
  }
);
