import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../scenes/auth/screens/login.screen'
import SignUp from '../scenes/auth/screens/signup.screen'
import StoreProvider from '../data/context/store.context'

const AuthNav = createStackNavigator()

const AuthNavigator = ({ navigation, route }) => {
  return (
    <StoreProvider>
      <AuthNav.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <AuthNav.Screen
          name="Login"
          component={Login}
        />
        <AuthNav.Screen
          name="SignUp"
          component={SignUp}
        />
      </AuthNav.Navigator>
    </StoreProvider>
  )
}


export  {
  AuthNavigator
}
