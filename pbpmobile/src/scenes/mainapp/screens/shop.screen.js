import React, { Fragment, useContext, useState, useEffect } from 'react';
import moment from 'moment'
import Modal from "react-native-modal";
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { createItemAction, allShopsAction } from '../../../data/api/actions'
import { TouchableText, Input, ItemForm } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import { addToCart } from '../../../data/api/action.creators'

const {height, width} = Dimensions.get('window');

const defaultItem = {
  name: '',
  price: '',
  shop: ''
}

const Shop = ({navigation, route}) => {
  const defaultShop = route.params.shop
  const { store, dispatch } = useContext(StoreContext)
  const { cart, user, allShops } = store

  const [ shop, updateShop] = useState(defaultShop)
  const [ showModal, toggleModal] = useState(false)
  const [ itemDetails, setItemDetails] = useState(defaultItem)

  useEffect(() => {
    updateShop(handleUpdateShop())
  })

  const handleUpdateShop = () => {
    return allShops.shops.find((currentShop) => currentShop.id === shop.id)
  }

  const handleDetails = (key, text) => {
    setItemDetails({...itemDetails, [key]: text})
  }

  const handleAddItem = () => {
    const item = {...itemDetails, shop: user.shop.id}
    createItemAction(dispatch, item)
    toggleModal(!showModal)
    setItemDetails(defaultItem)
    allShopsAction(dispatch)
  }

  const handleAddTocart = (shopItem) => {
    if(user.isVendor && user.shop && user.shop.id === shop.id) {
      return null
    }
    dispatch(addToCart(shopItem))
  }

  const renderItems = ( item ) => {
      const shopItem = item.item
      return (
        <TouchableOpacity
          onPress={() => handleAddTocart(shopItem)} >
          <Text>{shopItem.name}</Text>
          <Text>{shopItem.price}</Text>
          <Text> Date Created: {moment(shopItem.dateCreated).format("DD/MM/YYYY")} </Text>
        </TouchableOpacity>
      )
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
        <Text> Name: {shop.name} </Text>
        <View>
          <Text> Items: </Text>
          {
            shop.items.length > 0
            ? <FlatList
                style={{
                  height: height - 200,
                  flexGrow: 0
                }}
                data={shop.items}
                keyExtractor={(item, index) => {
                      return item._id;
                    }}
                renderItem={renderItems}
                />
              : <Text> There are no items to be ordered from this shop</Text>
          }
        </View>

        {
          user.isVendor && (Object.keys(user.shop).length > 0
             ? user.shop.id === shop.id &&
              <TouchableText
                text="Add Item"
                handlePress={() => toggleModal(!showModal)} />
            : <TouchableText
                text={`All Vendors Must have a shop!
                  \nClick me or navigate to your profile to create one`}
                handlePress={() => navigation.navigate('Profile')}
              />)
        }

        {
          cart.length > 0 &&
          <TouchableText
             text={`${cart.length} Items added to Order`}
             handlePress={() => navigation.navigate('Cart')} />
        }
      </View>
  )
}

export default Shop;
