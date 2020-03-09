import * as creators from './action.creators'
import { loginUser, signupUser, getShopsItems, getItems } from './action.api'
import { storeToken, retrieveToken } from './action.token'


const login = async (dispatch, {email, password}) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await loginUser({email, password})

    const { data } = response

    if(data.user) {
      storeToken('userKey', data.user.userKey)
      return(dispatch(creators.loginUserSuccess(data)))
    }

  } catch(error) {
    return(dispatch(creators.loginUserFailure(error)))
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

    return(dispatch(creators.signupUserSuccess(data)))
  } catch(error) {
    return(dispatch(creators.signupUserFailure(error)))
  }
}

export { login, signup, fetchItems}
