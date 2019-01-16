import { all } from 'redux-saga/effects'
import { playlistUpdate } from './features/playlist/'

export default function * rootSaga () {
  yield all([
    playlistUpdate(),
  ])
}
