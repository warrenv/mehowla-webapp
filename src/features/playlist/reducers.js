export const defaultState = {}

const LOAD_PLAYLIST = 'playlist::load'
const RECEIVED_PLAYLIST = 'playlist::received'
const PLAY_SONG = 'playlist::song::play'

export const actions = {
  load: () => ({ type: LOAD_PLAYLIST }),

  received: playlist => ({
    type: RECEIVED_PLAYLIST,
    payload: playlist,
  }),

  play: song => ({
    type: PLAY_SONG,
    payload: song,
  }),
}

export const reducer = (state = defaultState, action = { payload: {} }) => {
  const { type, payload } = action

  switch (type) {
    case actions.received().type:
      return payload

    default: return state
  }
}
