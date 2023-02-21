import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    // console.log('🚀  data:', data);
    toast.success('Welcome !', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addContacts = createAsyncThunk(
  'addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'deleteContact',
  async (uniqueId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${uniqueId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
