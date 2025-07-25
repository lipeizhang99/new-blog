// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer,
  devTools: true, // 默认已开启，无需 redux-devtools-extension
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // 已内置 thunk
});

export default store;
