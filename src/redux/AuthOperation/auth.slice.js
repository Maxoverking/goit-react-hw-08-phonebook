import { createSlice } from '@reduxjs/toolkit';
// import { STATUS } from 'components/Status/costants.status';
import { registredUser, logInUser, logOut, refreshUser } from './authOperation';

export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLogInAlready: false,
};

// const loading = state => {
//   state.isLoggedIn = STATUS.loading;
// };
// const error = state => {
//   state.isLoggedIn = STATUS.error;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registredUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registredUser.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLogIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLogInAlready = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLogInAlready = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLogInAlready = false;
      });
  },
});

export const authReducer = authSlice.reducer;
