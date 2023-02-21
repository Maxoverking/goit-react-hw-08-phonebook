import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
  async (newUserData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', newUserData);
      // console.log('🚀  data', data);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logInUser = createAsyncThunk(
  'auth/login',
  async (existUserData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', existUserData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('This user does not exist please Register!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      );
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
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
