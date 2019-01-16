import 'regenerator-runtime/runtime'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import socketIOClient from 'socket.io-client'

import RealtimeService, { SONGS_NAMESPACE } from './services/realtime'
import rootSaga from './root-saga'
import rootReducer from './reducers'

export default (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  sagaMiddleware.run(rootSaga)
  RealtimeService.create(store.dispatch, socketIOClient, SONGS_NAMESPACE)

  return store
}
