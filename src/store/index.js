import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from 'reducers'

const logger = createLogger({
  collapsed: true,
})

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
    ))
}

export default configureStore
