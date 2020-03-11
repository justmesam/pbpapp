import types from './action.types'

export const makeApiCall = () => ({
  type: types.INITIATE_API_CALL
})

export const setUser = (user) => ({
  type: types.SET_USER,
  user
})

export const setNavigations = (navigation) => ({
  type: types.SET_NAVIGATIONS,
  navigation
})

export const addToCart = (item) => ({
  type: types.ADD_TO_CART,
  item
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

export const fetchOrdersSuccess = (orders) => ({
  type: types.FETCH_ORDERS_SUCCESS,
  orders
})

export const fetchOrdersFailure = (error) => ({
  type: types.FETCH_ORDERS_FAILURE,
  error
})

export const fetchShopsSuccess = (shops) => ({
  type: types.FETCH_SHOPS_SUCCESS,
  shops
})

export const fetchShopsFailure = (error) => ({
  type: types.FETCH_SHOPS_FAILURE,
  error
})

export const updateUserSuccess = (user) => ({
  type: types.UPDATE_USER_SUCCESS,
  user
})

export const updateUserFailure = (error) => ({
  type: types.UPDATE_USER_FAILURE,
  error
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
})

export const logoutFailure = (error) => ({
  type: types.LOGOUT_FAILURE,
  error
})

export const fetchUserSuccess = (user) => ({
  type: types.FETCH_CURRENT_USER_SUCCESS,
  user
})

export const fetchUserFailure = (error) => ({
  type: types.FETCH_CURRENT_USER_FAILURE,
  error
})

export const createItemSuccess = (item) => ({
  type: types.CREATE_ITEM_SUCCESS,
  item
})

export const createItemFailure = (error) => ({
  type: types.CREATE_ITEM_FAILURE,
  error
})

export const allShopsSuccess = (allShops) => ({
  type: types.FETCH_ALL_SHOPS_SUCCESS,
  allShops
})

export const allShopsFailure = (error) => ({
  type: types.FETCH_ALL_SHOPS_FAILURE,
  error
})

export const createOrderSuccess = (orders) => ({
  type: types.CREATE_ORDERS_SUCCESS,
  orders
})

export const createOrderFailure = (error) => ({
  type: types.CREATE_ORDERS_FAILURE,
  error
})
