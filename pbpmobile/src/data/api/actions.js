import * as creators from './action.creators'
import { loginUser, signupUser } from './action.api'


const login = async (dispatch, {email, password}) => {
  try {
    dispatch(creators.makeApiCall())

    const response = await loginUser({email, password})

    const { data } = response

    return(dispatch(creators.loginUserSuccess(data)))
  } catch(error) {
    return(dispatch(creators.loginUserFailure(error)))
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

export { login, signup}
