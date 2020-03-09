import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View } from 'react-native';

import { StoreContext} from '../data/context/store.context'
import MainAppNavigator from './app.navigator'
import AuthNavigator from './auth.navigator'

const AppNavigator = () => {
  const [ route, setRoute] = useState('home')
  const { store } = useContext(StoreContext)

  useEffect(() => {
    handleIsAuthenticated()
  })

  const handleIsAuthenticated = () => {
    const { isAuthenicated } = store

    if(isAuthenicated){
      return setRoute('home')
    }
    setRoute('auth')
  }

  return (
      <Fragment>
        {
          route === 'home'
          ? <MainAppNavigator />
          : <AuthNavigator />
        }
      </Fragment>
  )
}

export default AppNavigator;
