import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import moment from 'moment'

import { fetchShops, allShopsAction, fetchOrders, createItemAction,  fetchUserAction } from '../../../data/api/actions'
import { setNavigations, addToCart } from '../../../data/api/action.creators'
import Header from './header.screen'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText, ItemForm } from '../../common'

const defaultItem = {
  name: '',
  price: '',
  shop: ''
}

const Home = (props) => {
  const { navigation } = props
  const { store, dispatch } = useContext(StoreContext)
  const { user, allShops, cart } = store
  const [ showModal, toggleModal] = useState(false)
  const [ itemDetails, setItemDetails] = useState(defaultItem)


  useEffect(() => {
    allShopsAction(dispatch)
    fetchUserAction(dispatch)
    dispatch(setNavigations(navigation))
  }, [])

  const handleDetails = (key, text) => {
    setItemDetails({...itemDetails, [key]: text})
  }

  const handleAddItem = () => {
    const item = {...itemDetails, shop: user.shop.id}
    createItemAction(dispatch, item)
    toggleModal(!showModal)
    setItemDetails(defaultItem)
  }

  return (
    <View>
      {
        allShops.count < 1
        ? <Text> No Shops to order from available.</Text>
        : allShops.shops.map((shop, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('Shop', { shop })}>
            <Text>{shop.name}</Text>
          </TouchableOpacity>
        ))
      }

        {
          user.isVendor && Object.keys(user.shop).length < 1 &&
             <TouchableText
                text={
                  `All Vendors Must have a shop!\nClick me or navigate to your profile to create one`}
                handlePress={() => navigation.navigate('Profile')}
              />
        }

        {
          cart.length > 0 &&
          <View>
            <Text>{cart.length} Items added to Order</Text>
          </View>
        }
    </View>
  );
}

export default Home
