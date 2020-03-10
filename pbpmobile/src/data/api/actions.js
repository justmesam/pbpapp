import * as creators from './action.creators'
import { storeToken, retrieveToken, removeToken } from './action.token'
import {
  loginUser,
  signupUser,
  getShopsItems,
  getItems,
  getOrders,
  getShops,
  updateUser,
  fetchUser,
  createItem } from './action.api'


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

const signup = async (dispatch, {username, email, password, isVendor}) => {
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

const updateUserAction = async (dispatch, userDetails) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await updateUser(userDetails)

    const { data } = response

    if(data.responseObject) {
      storeToken('user', JSON.stringify(data.responseObject))
      return(dispatch(creators.updateUserSuccess(data.responseObject)))
    }

  } catch(error) {
    return(dispatch(creators.updateUserFailure(error)))
  }
}

const fetchUserAction = async (dispatch) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await fetchUser()

    const { data } = response

    if(data.user) {
      storeToken('userKey', data.user.userKey)
      storeToken('user', JSON.stringify(data.user))
      return(dispatch(creators.fetchUserSuccess(data.user)))
    }

  } catch(error) {
    return(dispatch(creators.fetchUserFailure(error)))
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

const createItemAction = async (dispatch, item) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await createItem(item)

    const { data } = response
    return(dispatch(creators.createItemSuccess(data)))

  } catch(error) {
    return(dispatch(creators.createItemFailure(error)))
  }
}

export { login, signup, fetchItems, fetchUserAction, fetchShops, fetchOrders, createItemAction, updateUserAction, logout}
