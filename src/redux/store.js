// Import necessary dependencies and modules
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';
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

// Configure the Redux store
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer =combineReducers({user: userReducer,cart: cartReducer})

const persistedUserReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedUserReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export the configured store and persistor
export { store };

export const persistor = persistStore(store);
