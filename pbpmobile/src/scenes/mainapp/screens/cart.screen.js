import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import moment from 'moment'

import { createOrderAction, fetchOrders } from '../../../data/api/actions'
import { setNavigations, addToCart } from '../../../data/api/action.creators'
import Header from './header.screen'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText, ItemForm } from '../../common'

const {height, width} = Dimensions.get('window');

import styles from '../styles'

const defaultOrder = {
  name: '',
  total: '',
  shop: '',
  items: []
}

const Home = (props) => {
  const { navigation } = props
  const { store, dispatch } = useContext(StoreContext)
  const { cart, orders } = store
  const [ orderDetails, setOrderDetails] = useState(defaultOrder)


  useEffect(() => {
    fetchOrders(dispatch)
    setOrderDetails(populateDetails())
  }, [orders.count])

  const populateDetails = () => {
    const name = `Order ${orders.count + 1}`
    const price = cart.reduce(( accumulator, currentValue ) =>
    accumulator + currentValue.price, 0 )
    const items = cart.map((item) => item._id)
    const shop = cart[0].shop

    return {
      name: name,
      total: price,
      shop: shop,
      items: items }
  }

  const handleDetails = (key, text) => {
    setOrderDetails({...orderDetails, [key]: text})
  }

  const handleOrder = () => {
    createOrderAction(dispatch, orderDetails)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.Container}>
      <Input
        placeholder="Order"
        value={orderDetails.name}
        handleOnchange={(text) => handleDetails('name', text)}
        />
      <View style={styles.shopDetials}>
          <Text style={styles.name}> Total Price : </Text>
          <Text style={{
              ...styles.nameValue,
              ...styles.cartTotal
            }}> {orderDetails.total} </Text>
        </View>
      <FlatList
          style={{
            ...styles.ListContainer,
            ...styles.itemsListContainer}}
          data={cart}
          keyExtractor={(item ) => item._id}
          renderItem={( item ) => (
                <TouchableOpacity
                  style={styles.itemTile}
                  onPress={() => dispatch(addToCart(item.item))}>
                  <Text style={styles.name}>{item.item.name}</Text>
                  <Text style={styles.itemprice}>Ksh: {item.item.price}</Text>
                </TouchableOpacity>
              )
            }
          />
      <TouchableText
        touchStyles={styles.cartBanner}
        textStyles={styles.cartText}
         text={`Complete Order`}
         handlePress={() => handleOrder()} />
    </View>
  );
}

export default Home
