import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import moment from 'moment'

import { fetchOrders } from '../../../data/api/actions'
import { TouchableText } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import styles from '../styles'

const Orders = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { orders } = store

  useEffect(() => {
    fetchOrders(dispatch)
  }, [])

  return (
      <View style={styles.Container}>
        {
          orders.count < 1
          ? <Text style={styles.fallBackText}>
              You haven't made any orders yet.
            </Text>
          : <FlatList
              style={{
                ...styles.ListContainer
              }}
              data={orders.orders}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <View style={styles.orderTile}>
                  <View style={styles.orderTileSection}>
                    <Text style={styles.name}>{item.item.name}</Text>
                    <Text style={{...styles.name,
                        ...styles.orderTotal}}>total: Ksh {item.item.total}</Text>
                  </View>
                  <View style={styles.orderTileSection}>
                    <View style={styles.orderIdSection}>
                      <Text style={styles.orderDetails}>Order id: </Text>
                      <Text style={styles.orderId}>#{item.item.id.substring(0, 15)}</Text>
                    </View>
                    <Text style={styles.orderDetails}>
                      Date Ordered: {moment(item.item.dateCreated).format("DD/MM/YYYY")}
                    </Text>
                  </View>
                </View>
              )}
              />
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
      <View style={styles.Container}>
      {
        AllItems.length < 1
        ? <Text style={styles.fallBackText}> You haven't ordered any items yet.</Text>
        : <FlatList
            style={{
              ...styles.ListContainer
            }}
            data={AllItems}
            keyExtractor={(item) => item._id}
            renderItem={(item) => (
              <View style={styles.itemTile}>
                <Text style={styles.name}>{item.item.name}</Text>
                <Text style={styles.itemprice}>Ksh: {item.item.price}</Text>
              </View>
            )}
            />
      }
      </View>
  )
}

export { Items, Orders }
