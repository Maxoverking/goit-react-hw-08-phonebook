import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'components/Status/costants.status';
import { getContacts, addContacts, deleteContacts } from './operations';

export const initialStateContacts = {
  items: [],
  isLoading: STATUS.idle,
  error: null,
};

const loading = state => {
  state.isLoading = STATUS.loading;
};
const error = state => {
  state.error = STATUS.error;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, loading)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = STATUS.success;
        state.items = payload;
      })
      .addCase(getContacts.rejected, error)
      .addCase(addContacts.pending, loading)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = STATUS.success;
        state.items = [...state.items, payload];
      })
      .addCase(addContacts.rejected, error)
      // .addCase(deleteContacts.pending, loading)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = STATUS.success;
        const removeContact = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(removeContact, 1);
      })
      .addCase(deleteContacts.rejected, error);
  },
});

export const contactsReducer = contactsSlice.reducer;
