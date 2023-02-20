import { initialState } from './init.state';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';
import { authReducer } from './AuthOperation/auth.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
  // blacklist: ['token'],
};

export const store = configureStore({
  preloadedState: initialState,
  devTools: true,
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
