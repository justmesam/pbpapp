import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import Modal from "react-native-modal";
import moment from 'moment'

import { fetchItems, fetchShops, fetchOrders, createItemAction,  fetchUserAction } from '../../../data/api/actions'
import { setNavigations } from '../../../data/api/action.creators'
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
  const { user, items } = store
  const [ showModal, toggleModal] = useState(false)
  const [ itemDetails, setItemDetails] = useState(defaultItem)


  useEffect(() => {
    fetchItems(dispatch)
    fetchOrders(dispatch)
    fetchShops(dispatch)
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
  }

  return (
    <View>
      <Modal isVisible={showModal}>
          <ItemForm
            showModal={showModal}
            toggleModal={toggleModal}
            handleDetails={handleDetails}
            itemDetails={itemDetails}
            handleAddItem={handleAddItem} />

      </Modal>
      {
        items.count < 1
        ? <Text> No Items to order available.</Text>
        : items.items.map((item, i) => (
          <View key={i}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text> Date Created: {moment(item.dateCreated).format("DD/MM/YYYY")} </Text>
          </View>
        ))
      }

        {
          (user.isVendor && Object.keys(user.shop).length > 0 )
            ? <TouchableText
                text="Add Item"
                handlePress={() => toggleModal(!showModal)} />
            : <TouchableText
                text={`All Vendors Must have a shop!
                  \nClick me or navigate to your profile to create one`}
                handlePress={() => navigation.navigate('Profile')}
              />
        }
    </View>
  );
}

export default Home
