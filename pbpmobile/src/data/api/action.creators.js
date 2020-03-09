import types from './action.types'

export const makeApiCall = () => ({
  type: types.INITIATE_API_CALL
})

export const setUser = (user) => ({
  type: types.SET_USER,
  user
})

export const loginUserSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  user
})

export const loginUserFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  error
})

export const signupUserSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  user
})

export const signupUserFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  error
})

export const fetchItemsSuccess = (items) => ({
  type: types.FETCH_ITEMS_SUCCESS,
  items
})

export const fetchItemsFailure = (error) => ({
  type: types.FETCH_ITEMS_FAILURE,
  error
})
