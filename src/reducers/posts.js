import {
  _POSTS_FETCH,
  _POSTS_FETCH_LOADING,
  _POSTS_FETCH_ERROR,
} from 'actions/posts'

const initialState = {
  posts: [],
  loading: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case _POSTS_FETCH:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }

    case _POSTS_FETCH_LOADING:
      return {
        loading: true
      }

    case _POSTS_FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default posts
