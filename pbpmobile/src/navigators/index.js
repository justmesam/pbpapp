import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View } from 'react-native';

import { StoreContext} from '../data/context/store.context'
import { retrieveToken } from '../data/api/action.token'
import { setUser } from '../data/api/action.creators'
import MainAppNavigator from './app.navigator'
import AuthNavigator from './auth.navigator'

const AppNavigator = () => {
  const [ route, setRoute] = useState('auth')
  const { store, dispatch } = useContext(StoreContext)

  useEffect(() => {
    handleIsAuthenticated()
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
