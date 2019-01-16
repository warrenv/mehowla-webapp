import { combineReducers } from 'redux'
import { reducer as playlist } from './features/playlist'
import { reducer as discover } from './features/discover'

export default combineReducers({
  playlist,
  discover,
})
