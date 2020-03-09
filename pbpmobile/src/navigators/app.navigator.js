import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../scenes/mainapp/screens/home.screen'
import Profile from '../scenes/mainapp/screens/profile.screen'

const MainAppNav = createStackNavigator()

const MainAppNavigator = ({ navigation, route }) => {
  return (
      <MainAppNav.Navigator
        initialRouteName="Home"
      >
        <MainAppNav.Screen
          name="Home"
          component={Home}
        />
        <MainAppNav.Screen
          name="Profile"
          component={Profile}
        />
      </MainAppNav.Navigator>
  )
}


export default MainAppNavigator
