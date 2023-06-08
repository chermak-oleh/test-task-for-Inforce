/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import apiProductsReducer from '../features/apiProductsSlice';

export const store = configureStore({
  reducer: {
    apiProducts: apiProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
