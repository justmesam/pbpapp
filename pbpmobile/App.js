import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  YellowBox
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigators'
import StoreProvider from './src/data/context/store.context'



YellowBox.ignoreWarnings(['Warning:']);

const App: () => React$Node = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
