import { createSlice } from '@reduxjs/toolkit';
export const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContactsAction: (_, { payload }) => payload,
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterContactsAction } = filterSlice.actions;
