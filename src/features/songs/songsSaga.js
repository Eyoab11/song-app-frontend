import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchSongsFromApi,
  createSongInApi,
  updateSongInApi,
  deleteSongInApi,
} from '../../api/songApi';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from './songsSlice';

function* handleFetchSongs() {
  try {
    const data = yield call(fetchSongsFromApi);
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* handleAddSong(action) {
  try {
    const newSong = yield call(createSongInApi, action.payload);
    yield put(addSongSuccess(newSong));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* handleUpdateSong(action) {
  try {
    const updatedSong = yield call(updateSongInApi, action.payload.id, action.payload);
    yield put(updateSongSuccess(updatedSong));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* handleDeleteSong(action) {
  try {
    yield call(deleteSongInApi, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* songsSaga() {
  yield all([
    takeLatest(fetchSongsStart.type, handleFetchSongs),
    takeLatest(addSongStart.type, handleAddSong),
    takeLatest(updateSongStart.type, handleUpdateSong),
    takeLatest(deleteSongStart.type, handleDeleteSong),
  ]);
}