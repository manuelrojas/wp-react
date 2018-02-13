import { combineReducers } from 'redux'
import user from './users'
import posts from './posts'

export default combineReducers({
  user,
  posts
})
