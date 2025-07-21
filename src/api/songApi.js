import { API_URLS } from '../config/api';

export const fetchSongsFromApi = () =>
  fetch(API_URLS.SONGS).then(res => res.json());

export const createSongInApi = (song) =>
  fetch(API_URLS.SONGS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(song),
  }).then(res => res.json());

export const updateSongInApi = (id, song) =>
  fetch(`${API_URLS.SONGS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(song),
  }).then(res => res.json());

export const deleteSongInApi = (id) =>
  fetch(`${API_URLS.SONGS}/${id}`, { method: 'DELETE' }).then(res => res.json());

export const fetchSongByIdFromApi = (id) =>
  fetch(`${API_URLS.SONGS}/${id}`).then(res => res.json());