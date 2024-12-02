import { configureStore } from '@reduxjs/toolkit';

import generalApi from '@/state/api/initialApi';

const store = configureStore({
  reducer: {
    [generalApi.reducerPath]: generalApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApi.middleware),
});

export const makeStore = () => {
  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
