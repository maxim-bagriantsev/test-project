import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const reducer = combineReducers({});

const setupStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};
export type State = ReturnType<typeof reducer>
export type Store = ReturnType<typeof setupStore>
export type Dispatch = Store['dispatch']

export const wrapper = createWrapper<Store>(setupStore);