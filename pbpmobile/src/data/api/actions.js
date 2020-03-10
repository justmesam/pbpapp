import * as creators from './action.creators'
import { storeToken, retrieveToken, removeToken } from './action.token'
import {
  loginUser,
  signupUser,
  getShopsItems,
  getItems,
  getOrders,
  getShops,
  updateUser } from './action.api'


const login = async (dispatch, {email, password}) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await loginUser({email, password})

    const { data } = response

    if(data.user) {
      storeToken('userKey', data.user.userKey)
      storeToken('user', JSON.stringify(data.user))
      return(dispatch(creators.loginUserSuccess(data)))
    }

  } catch(error) {
    return(dispatch(creators.loginUserFailure(error)))
  }
}

const  fetchShops = async (dispatch, limit) => {
  try {
    dispatch(creators.makeApiCall())
    const response = await getShops(limit)

    const { data } = response

    return(dispatch(creators.fetchShopsSuccess(data)))
  } catch(error) {
    return(dispatch(creators.fetchShopsFailure(error.response.data)))
  }
}

const  fetchOrders = async (dispatch, limit) => {
  try {
    dispatch(creators.makeApiCall())
    const response = await getOrders(limit)

    const { data } = response

    return(dispatch(creators.fetchOrdersSuccess(data)))
  } catch(error) {
    return(dispatch(creators.fetchOrdersFailure(error.response.data)))
  }
}

const  fetchItems = async (dispatch, shop, limit) => {
  try {
    dispatch(creators.makeApiCall())
    let response;

    if (shop) {
      response = await getShopsItems(shop, limit)
    } else {
      response = await getItems()
    }

    const { data } = response

    return(dispatch(creators.fetchItemsSuccess(data)))
  } catch(error) {
    return(dispatch(creators.fetchItemsFailure(error.response.data)))
  }
}

const signup = async (dispatch, {email, password}) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await signupUser({username, email, password, isVendor})
    const { data } = response

    if(data.user) {
      storeToken('userKey', data.user.userKey)
      storeToken('user', JSON.stringify(data.user))
      return(dispatch(creators.signupUserSuccess(data)))
    }
  } catch(error) {
    return(dispatch(creators.signupUserFailure(error)))
  }
}

const updateUserAction = async (dispatch, data) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await updateUser(data)

    const { data } = response

    if(data) {
      storeToken('userKey', data.userKey)
      storeToken('user', JSON.stringify(data))
      return(dispatch(creators.updateUserSuccess(data)))
    }

  } catch(error) {
    return(dispatch(creators.updateUserFailure(error)))
  }
}

const logout = async (dispatch) => {
  try {
    removeToken('userKey')
    removeToken('user')
    return(dispatch(creators.logoutSuccess()))
  } catch (e) {
    return(dispatch(creators.logoutFailure()))
  }
}

export { login, signup, fetchItems, fetchShops, fetchOrders, updateUserAction, logout}
