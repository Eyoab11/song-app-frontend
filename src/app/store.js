import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songsReducer from '../features/songs/songsSlice';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
// create our Redux store 
export const store = configureStore({
  reducer: {
    songs: songsReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);