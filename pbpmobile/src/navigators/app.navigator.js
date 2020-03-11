import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../scenes/mainapp/screens/home.screen'
import Profile from '../scenes/mainapp/screens/profile.screen'
import Header from '../scenes/mainapp/screens/header.screen'
import Cart from '../scenes/mainapp/screens/cart.screen'
import Shop from '../scenes/mainapp/screens/shop.screen'
import ShopMap from '../scenes/mainapp/screens/shops.screen'
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
        <MainAppNav.Screen name="Cart" component={Cart} />
        <MainAppNav.Screen name="Shop" component={Shop} />
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
      <Drawer.Screen name="Shops Ordered From" component={ShopMap} />
    </Drawer.Navigator>
  );
}

export default MainAppNavigator
