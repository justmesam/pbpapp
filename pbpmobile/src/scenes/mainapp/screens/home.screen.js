import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';

import { fetchItems, fetchShops, fetchOrders } from '../../../data/api/actions'
import { setNavigations } from '../../../data/api/action.creators'
import Header from './header.screen'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'


const Home = (props) => {
  const { navigation } = props
  const { store, dispatch } = useContext(StoreContext)


  useEffect(() => {
    fetchItems(dispatch)
    fetchOrders(dispatch)
    fetchShops(dispatch)
    dispatch(setNavigations(navigation))
  }, [])

  return (
    <View>
      <Text> Items Will be displayed here </Text>
    </View>
  );
}

export default Home
