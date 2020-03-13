import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import { StoreContext} from '../data/context/store.context'
import { retrieveToken } from '../data/api/action.token'
import { setUser, setLocation } from '../data/api/action.creators'
import MainAppNavigator from './app.navigator'
import AuthNavigator from './auth.navigator'

const AppNavigator = () => {
  const [ route, setRoute] = useState('')
  const { store, dispatch } = useContext(StoreContext)

  useEffect(() => {
    handleIsAuthenticated()
    requestCameraPermission()
  }, [store.isAuthenicated])

  const handleIsAuthenticated = async () => {
    const { isAuthenicated } = store
    const token = await retrieveToken('userKey')
    const user = await retrieveToken('user')

    if(isAuthenicated || token){
      dispatch(setUser(JSON.parse(user)))
      return setRoute('home')
    }
    setRoute('auth')
  }

  async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        info => dispatch(setLocation(info.coords)));
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

  if (route === 'home'){
    return <MainAppNavigator />
  } else if (route === 'auth') {
    return <AuthNavigator />
  } else {
    return <View/>
  }
}

export default AppNavigator;
