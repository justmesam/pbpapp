import axios from 'axios';


const apiURL = 'https://pbpshoppu.herokuapp.com/api'

const instance = axios.create({
  baseURL : `${apiURL}`,
  timeout : 2000,
  headers : {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

export {
  instance
}
