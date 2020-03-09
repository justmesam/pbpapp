import types from './action.types'

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {...state,
        user: action.user.user,
        isAuthenicated: true,
        message: action.user.message
      }
    case types.SIGNUP_SUCCESS:
      return {...state, user: action.user.user, isAuthenicated: true}
    case types.SET_USER:
      return {...state, user: action.user}
    case types.LOGIN_FAILURE:
      return {...state, errors: action.error}
    case types.SIGNUP_FAILURE:
      return {...state, errors: action.error}
    default:
      return state
  }
}
