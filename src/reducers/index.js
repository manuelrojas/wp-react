import { combineReducers } from 'redux'
import user from './users'
import posts from './posts'
import pages from './pages'

export default combineReducers({
  user,
  posts,
  pages,
})
