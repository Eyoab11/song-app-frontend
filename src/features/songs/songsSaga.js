import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchSongsFromApi } from '../../api/songApi';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
} from './songsSlice';

// I run when it's time to fetch songs
function* handleFetchSongs() {
  try {
    const response = yield call(fetchSongsFromApi); // I call the API
    yield put(fetchSongsSuccess(response.data)); // Success! I send data to store
  } catch (error) {
    yield put(fetchSongsFailure(error.message)); // Uh oh, I ran into a problem
  }
}

// I watch for fetch actions and run the worker above
function* watchFetchSongs() {
  yield takeLatest(fetchSongsStart.type, handleFetchSongs); // Only the latest fetch matters to me
}

// I can add more watchers here for add, update, delete if needed
// function* watchAddSong() { ... }

// This is my main saga for songs. I'll add more as I go.
export function* songsSaga() {
  yield all([
    watchFetchSongs(),
    // I'll add more watchers here
  ]);
}