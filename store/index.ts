import { configureStore } from '@reduxjs/toolkit';
import { mbaApi } from '@store/mba/api';
import { mbaReducer } from '@store/mba/mba.Slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [mbaApi.reducerPath]: mbaApi.reducer,
    mba: mbaReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mbaApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>