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
      return {...state, user: action.user, isAuthenicated: true}
    case types.SET_NAVIGATIONS:
      return {...state, navigation: action.navigation}
    case types.LOGIN_FAILURE:
      return {...state, errors: action.error}
    case types.SIGNUP_FAILURE:
      return {...state, errors: action.error}
    case types.FETCH_ITEMS_SUCCESS:
      return {...state, items: action.items}
    case types.FETCH_ITEMS_FAILURE:
      return {...state, errors: action.error}
    case types.FETCH_ORDERS_SUCCESS:
      return {...state, orders: action.orders}
    case types.FETCH_ORDERS_FAILURE:
      return {...state, errors: action.error}
    case types.FETCH_SHOPS_SUCCESS:
      return {...state, shops: action.shops}
    case types.FETCH_SHOPS_FAILURE:
      return {...state, errors: action.error}
    case types.UPDATE_USER_SUCCESS:
      return {...state, user: action.user}
    case types.UPDATE_USER_FAILURE:
      return {...state, errors: action.error}
      case types.UPDATE_USER_SUCCESS:
        return {...state, user: {}, isAuthenicated: false, errors: {},}
    default:
      return state
  }
}
