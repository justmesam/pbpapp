import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment'

import { fetchOrders } from '../../../data/api/actions'
import { TouchableText } from '../../common'
import { StoreContext} from '../../../data/context/store.context'

const Orders = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { orders } = store

  useEffect(() => {
    fetchOrders(dispatch)
  }, [])

  return (
      <View>
        {
          orders.count < 1
          ? <Text> You haven't made any orders yet.</Text>
          : orders.orders.map((order, i) => (
            <Text>{order.name}</Text>
          ))
        }
      </View>
  )
}

const Items = () => {
  const [ AllItems, setItems] = useState([])
  const { store, dispatch } = useContext(StoreContext)
  const { orders } = store

  useEffect(() => {
    fetchOrders(dispatch)
    setItems(handleAllItems())
  }, [orders.count])

  const handleAllItems = () => {
    return orders.orders.reduce(
      (accumulated, current)=> [...accumulated, ...current.items], []
    )
  }


  return (
      <View>
      {
        AllItems.length < 1
        ? <Text> You haven't ordered any items yet.</Text>
        : AllItems.map((item, i) => (
          <View key={i}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text> Date Created: {moment(item.dateCreated).format("DD/MM/YYYY")} </Text>
          </View>
        ))
      }
      </View>
  )
}

export { Items, Orders }
