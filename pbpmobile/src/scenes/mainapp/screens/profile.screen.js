import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { StoreContext} from '../../../data/context/store.context'

const AppNavigator = () => {
  const { store } = useContext(StoreContext)
  const { user } = store
  return (
      <View>
        <Text> Name: {user.username} </Text>
        <Text> Email: {user.email} </Text>
      </View>
  )
}

export default AppNavigator;
