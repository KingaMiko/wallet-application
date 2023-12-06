import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/globalSlice';
import { sessionReducer } from './session/sessionSlice';
import { financeReducer } from './finance/financeSlice';

import storage from 'redux-persist/lib/storage';
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

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(sessionPersistConfig, sessionReducer);

export const store = configureStore({
  reducer: {
    global: globalReducer,
    session: persistedReducer,
    finance: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
