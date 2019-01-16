export const defaultState = []

const RECEIVED_DISCOVER = 'discover::received'

export const actions = {
  received: payload => ({
    type: RECEIVED_DISCOVER,
    payload,
  }),
}

export const reducer = (state = defaultState, action = { payload: {} }) => {
  const { type, payload } = action

  switch (type) {
    case actions.received().type:
      return [ { listener: 'Anonymous', ...payload }, ...state ]

    default: return state
  }
}
