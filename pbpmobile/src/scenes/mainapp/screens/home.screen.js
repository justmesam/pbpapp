import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';

import { fetchItems, fetchShops, fetchOrders, fetchUserAction } from '../../../data/api/actions'
import { setNavigations } from '../../../data/api/action.creators'
import Header from './header.screen'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'


const Home = (props) => {
  const { navigation } = props
  const { store, dispatch } = useContext(StoreContext)
  const { user, items } = store


  useEffect(() => {
    fetchItems(dispatch)
    fetchOrders(dispatch)
    fetchShops(dispatch)
    fetchUserAction(dispatch)
    dispatch(setNavigations(navigation))
  }, [])

  return (
    <View>
      {
        items.count < 1
        ? <Text> No Items to order available.</Text>
        : items.items.map((item, i) => {
          <Text>{item.name}</Text>
        })
      }

        {
          user.isVendor &&
          <TouchableText
            text="Add Item"
            handlePress={() => {}} />
        }
    </View>
  );
}

export default Home
