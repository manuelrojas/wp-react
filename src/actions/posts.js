import wpApi from 'api'
import { trigger, triggerError } from 'actions'

export const _POSTS_FETCH_LOADING = 'POSTS_LOADING'
export const _POSTS_FETCH = 'POSTS_FETCH'
export const _POSTS_FETCH_ERROR = 'POSTS_ERROR'

export const fetch = () => {
  return dispatch => {
    dispatch(trigger(_POSTS_FETCH_LOADING)())
    return wpApi
      .getPosts()
      .then(res => res.data)
      .then(trigger(_POSTS_FETCH))
      .catch(triggerError(_POSTS_FETCH_ERROR, 'Could not fetch posts'))
      .then(dispatch)
  }
}
