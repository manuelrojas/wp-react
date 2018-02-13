import {
  _USER_FETCH,
  _USER_FETCH_LOADING,
  _USER_FETCH_ERROR,
} from 'actions/users'

const initialState = {
  user: {},
  loading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _USER_FETCH:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

    case _USER_FETCH_LOADING:
      return {
        loading: true
      }

    case _USER_FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
