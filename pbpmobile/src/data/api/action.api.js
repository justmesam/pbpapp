import  { instance } from './api.configs'

const loginUser = async ({ email, password}) => {
  const response = await instance.post('/user/login',
  { email, password})
  return response
}

const signupUser = async ({username, email, password, isVendor}) => {
  const response = await instance.post('/user/register',
  {username, email, password, isVendor})
  return response
}

export { loginUser, signupUser }
