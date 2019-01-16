import { select, call, fork, put, takeEvery, all } from 'redux-saga/effects'

import { actions } from './reducers'
import { loadPlaylist } from './services'
import { RealtimeService, SONGS_NAMESPACE } from '../../services'

export function * handleLoad () {
  let playlist = yield call(loadPlaylist)

  if (playlist) {
    yield put(actions.received(playlist))
  }
}

export function * watchLoad () {
  yield takeEvery(actions.load().type, handleLoad)
}

const getSongs = (state) => state.playlist.songs

export function * handlePlaySong ({ payload: songId }) {
  const songs = yield select(getSongs)
  const song = songs.find(({ id }) => id === String(songId))
  RealtimeService.send(SONGS_NAMESPACE, song || {})
}

export function * watchPlaySong () {
  yield takeEvery(actions.play().type, handlePlaySong)
}

export default function * playlistUpdate () {
  yield all([
    fork(watchLoad),
    fork(watchPlaySong),
  ])
}
