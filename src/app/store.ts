import {configureStore} from '@reduxjs/toolkit';
import {showsReducer} from '../containers/showsSlice';
import {oneShowReducer} from '../containers/oneShowSlice';

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    show: oneShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

