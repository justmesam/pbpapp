import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import Modal from "react-native-modal";
import moment from 'moment'

import { fetchShops, allShopsAction, fetchOrders, createItemAction,  fetchUserAction } from '../../../data/api/actions'
import { setNavigations, addToCart } from '../../../data/api/action.creators'
import Header from './header.screen'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText, ItemForm } from '../../common'
import { capitalize } from './profile.screen'

import styles from '../styles'

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
    <View style={styles.Container}>
      {
        allShops.count < 1
        ? <Text style={styles.fallBackText} > No Shops to order from available.</Text>
        : <FlatList
            style={styles.ListContainer}
            data={allShops.shops}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableText
                touchStyles={styles.homeTiles}
                textStyles={styles.homeTilesText}
                text={capitalize(item.item.name)}
                handlePress={() => navigation.navigate('Shop', { shop: item.item })}/>
            )}/>
      }
      {
        user.isVendor && Object.keys(user.shop).length < 1 &&
           <TouchableText
             touchStyles={styles.warningBanner}
             textStyles={styles.warningBannerText}
              text={
                `All Vendors Must have a shop!\nClick me or navigate to your profile to create one`}
              handlePress={() => navigation.navigate('Profile')}
            />
      }

      {
        cart.length > 0 &&
        <TouchableText
           touchStyles={styles.cartBanner}
           textStyles={styles.cartText}
           text={`${cart.length} Items added to Order`}
           handlePress={() => {}}
         />
      }
    </View>
  );
}

export default Home
