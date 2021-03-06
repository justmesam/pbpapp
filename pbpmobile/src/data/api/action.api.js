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

const getItems = async () => {
  const response = await instance.get('/item/fetch')
  return response
}

const getShopsItems = async (shop, limit) => {
  const response = await instance.get(`/item/fetch/${shop}/${limit}`)
  return response
}

const getOrders = async (limit) => {
  const response = await instance.get(`/order/fetch/${limit}`)
  return response
}

const getShops = async (limit) => {
  const response = await instance.get(`/shop/fetch/${limit}`)
  return response
}

const updateUser = async (data) => {
  const response = await instance.post('/user/update', data )
  return response
}

const createItem = async (data) => {
  const response = await instance.post('/item/create', data )
  return response
}

const createOrder = async (data) => {
  const response = await instance.post('/order/create', data )
  return response
}

const fetchUser = async () => {
  const response = await instance.get('/user')
  return response
}

const allShops = async () => {
  const response = await instance.get('/shops')
  return response
}

export {
  loginUser,
  signupUser,
  getItems,
  getShopsItems,
  getOrders,
  getShops,
  updateUser,
  fetchUser,
  createItem,
  allShops,
  createOrder
}
