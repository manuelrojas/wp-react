import wpApi from 'api'
import { trigger, triggerError } from 'actions'

export const _PAGES_FETCH_LOADING = 'PAGES_LOADING'
export const _PAGES_FETCH = 'PAGES_FETCH'
export const _PAGES_FETCH_ERROR = 'PAGES_ERROR'

export const fetchPages = () => {
  return dispatch => {
    dispatch(trigger(_PAGES_FETCH_LOADING)())
    return wpApi
      .getPages()
      .then(res => res.data)
      .then(trigger(_PAGES_FETCH))
      .catch(triggerError(_PAGES_FETCH_ERROR, 'Could not fetch pages'))
      .then(dispatch)
  }
}
