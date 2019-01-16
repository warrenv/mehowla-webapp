import { actions } from '../features/discover'

export const SONGS_NAMESPACE = '/songs'

let sockets = {}
let dispatch = () => {}

export default ({
  create: (dispatchFn, clientFn, namespace) => {
    dispatch = dispatchFn
    sockets[namespace] = clientFn(namespace)

    if (namespace === SONGS_NAMESPACE) {
      sockets[namespace].on('songSelected', song => {
        dispatch(actions.received(song))
      })
    }
  },
  send: (namespace, song) => sockets[namespace].emit('selectSong', song),
})
