import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { TouchableText } from '../../common'
import { StoreContext} from '../../../data/context/store.context'

const Orders = () => {
  const { store } = useContext(StoreContext)
  const { orders } = store
  return (
      <View>
        {
          orders.count < 1
          ? <Text> You haven't made any orders yet.</Text>
          : orders.orders.map((order, i) => {
            <Text>{order.name}</Text>
          })
        }
      </View>
  )
}

const Items = () => {
  const { store } = useContext(StoreContext)
  const { items } = store
  return (
      <View>
      {
        items.count < 1
        ? <Text> You haven't ordered any items yet.</Text>
        : items.items.map((item, i) => {
          <Text>{item.name}</Text>
        })
      }
      </View>
  )
}

export { Items, Orders }