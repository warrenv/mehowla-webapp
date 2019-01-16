import { describe } from 'riteway'

import { actions, defaultState, reducer } from './reducers'

describe('reducer', async assert => {
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
    const newSong = {
      listener: 'Anonymous',
      title: 'Oh, Alice...',
      artist: 'The mad, mad hattters',
      timestamp: 'NEW YYY-MM-DD HH:MM',
    }

    const currentState = [
      {
        listener: 'Billy',
        title: 'The Smoothie Song',
        artist: 'Blender Boys',
        timestamp: 'YYYY-MM-DD HH:MM',
      },
    ]

    const actual = reducer(currentState, actions.received(newSong))

    assert({
      given: 'current state a new song',
      should: 'add the song to the front of the list',
      actual,
      expected: [newSong, ...currentState],
    })
  }
})
