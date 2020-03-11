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
    <View>
      <Input
        placeholder="Order"
        value={orderDetails.name}
        handleOnchange={(text) => handleDetails('name', text)}
        />
      <Text> Total Price : {orderDetails.total}</Text>
      <Text> Order Items: </Text>
      <FlatList
          style={{
            height: (height/2 )- 20,
            flexGrow: 0
          }}
          data={cart}
          keyExtractor={(item, index) => {
                return item._id;
              }}
          renderItem={( item ) => {
              const shopItem = item.item
              return (
                <TouchableOpacity
                  onPress={() => dispatch(addToCart(shopItem))}>
                  <Text>{shopItem.name}</Text>
                  <Text>{shopItem.price}</Text>
                </TouchableOpacity>
              )
            }}
          />
      <TouchableText
         text={`Complete Order`}
         handlePress={() => handleOrder()} />
    </View>
  );
}

export default Home
