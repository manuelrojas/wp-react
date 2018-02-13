import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import UserReducer from 'reducers/users'

const logger = createLogger({
  collapsed: true,
})

const configureStore = (initialState) => {
  return createStore(
    UserReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
    ))
}

export default configureStore
