/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator, Login } from './src/navigators/app.navigator'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
          <AuthNavigator />
    </NavigationContainer>

  );
};

export default App;
