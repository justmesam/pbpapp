import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';

import { fetchItems, fetchShops, fetchOrders } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'


const Home = () => {
  const { store, dispatch } = useContext(StoreContext)


  useEffect(() => {
    fetchItems(dispatch)
    fetchOrders(dispatch)
    fetchShops(dispatch)
  }, [])

  return (
    <View>
      <Text> Items Will be displayed here </Text>
    </View>
  );
}

export default Home
