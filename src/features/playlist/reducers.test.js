import { describe } from 'riteway'

import { actions, defaultState, reducer } from './reducers'

describe('src/features/playlist/reducers', async assert => {
  assert({
    given: 'no state or action',
    should: 'return the default state',
    actual: reducer(),
    expected: defaultState,
  })

  assert({
    given: 'current state and an unknown action type for this reducer',
    should: 'return the current state',
    actual: reducer({ some: 'state' }, { type: '__unknown__' }),
    expected: { some: 'state' },
  })

  {
    const playlist = {
      title: 'A hard-coded playlist',
      songs: [
        { title: 'Song #1',
          artist: 'The mad, mad hattters',
          src: 'http://localhost:9000/song/1',
        },
        { title: 'Song #2',
          artist: 'Someone and the werewolves',
          src: 'http://localhost:9000/song/2',
        },
        { title: 'Song #3',
          artist: 'Everune',
          src: 'http://localhost:9000/song/3',
        },
      ],
    }
    const actual = reducer({ previous: 'state' }, actions.received(playlist))

    assert({
      given: 'current state and received playlist',
      should: 'set the state to the playlist',
      actual,
      expected: playlist,
    })
  }
})
