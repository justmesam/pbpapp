import axios from 'axios';

import { retrieveToken } from './action.token'

const apiURL = 'https://pbpshoppu.herokuapp.com/api'




const instance = axios.create({
  baseURL : `${apiURL}`,
  timeout : 2000,
  headers : {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(async (config) => {
    const userKey = await retrieveToken('userKey')

    if(userKey) {
      config.headers['Authorization'] = `Bearer ${userKey}`
    }

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export {
  instance
}
