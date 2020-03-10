import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../scenes/mainapp/screens/home.screen'
import Profile from '../scenes/mainapp/screens/profile.screen'
import Header from '../scenes/mainapp/screens/header.screen'
import { Orders, Items} from '../scenes/mainapp/screens/listed.screen'

const MainAppNav = createStackNavigator()

const MainAppNavigator = ({ navigation, route }) => {
  return (
      <MainAppNav.Navigator
        initialRouteName="Home"
      >
        <MainAppNav.Screen
          name="Pbp App"
          component={AppDrawer}
          options={{ headerTitle: () => <Header/> }}
        />
      </MainAppNav.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export const AppDrawer = ({ navigation, route }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Orders Made" component={Orders} />
      <Drawer.Screen name="Items Ordered" component={Items} />
    </Drawer.Navigator>
  );
}

export default MainAppNavigator
