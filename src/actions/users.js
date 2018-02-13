import wpApi from '../api'
import { trigger, triggerError } from 'actions'

export const _USER_FETCH_LOADING = 'USER_LOADING'
export const _USER_FETCH = 'USER_FETCH'
export const _USER_FETCH_ERROR = 'USER_ERROR'

export const getUser = _id => {
  return dispatch => {
    dispatch(trigger(_USER_FETCH_LOADING)())
    return wpApi
      .getUser(_id)
      .then(res => res.data)
      .then(trigger(_USER_FETCH))
      .catch(triggerError(_USER_FETCH_ERROR, 'Could not fetch user'))
      .then(dispatch)
  }
}
