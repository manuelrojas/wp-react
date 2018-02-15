import {
  _PAGES_FETCH,
  _PAGES_FETCH_LOADING,
  _PAGES_FETCH_ERROR,
} from 'actions/pages'

const initialState = {
  pages: [],
  loading: false
}

const pages = (state = initialState, action) => {
  switch (action.type) {
    case _PAGES_FETCH:
      return {
        ...state,
        pages: action.payload,
        loading: false,
      }

    case _PAGES_FETCH_LOADING:
      return {
        loading: true
      }

    case _PAGES_FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default pages
