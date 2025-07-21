import { all } from 'redux-saga/effects';
import { songsSaga } from '../features/songs/songsSaga';

export function* rootSaga() {
  yield all([
    songsSaga(),
  ]);
}