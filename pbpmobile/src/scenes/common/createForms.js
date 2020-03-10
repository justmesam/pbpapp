import React from 'react';
import { View } from 'react-native';

import Input from './input'
import TouchableText from './touchableText'

const ShopForm = ({ shopDetails, handleDetails, toggleModal, handleShopCreate}) => {
  return (
        <View >
          <Input
            placeholder="Shop name"
            value={shopDetails.name}
            handleOnchange={(text) => handleDetails('name', text)}
            />
          <Input
            placeholder="longitude"
            value={shopDetails.longitude}
            handleOnchange={(text) => handleDetails('longitude', text)}
            keyboardType={'numeric'}
            />
          <Input
            placeholder="latitude"
            value={shopDetails.lattitude}
            handleOnchange={(text) => handleDetails('latitude', text)}
            keyboardType={'numeric'}
            />
          <View>
            <TouchableText
              text="Cancel"
              handlePress={() => toggleModal()} />
            <TouchableText
              text="Update"
              handlePress={() => handleShopCreate({ shop : shopDetails})} />
          </View >
        </View>

  )
}

const ItemForm = ({ itemDetails, handleDetails, toggleModal, handleAddItem, showModal}) => {
  return (
        <View >
          <Input
            placeholder="Item name"
            value={itemDetails.name}
            handleOnchange={(text) => handleDetails('name', text)}
            />
          <Input
            placeholder="price"
            value={itemDetails.price}
            handleOnchange={(text) => handleDetails('price', text)}
            keyboardType={'numeric'}
            />
          <View>
            <TouchableText
              text="Cancel"
              handlePress={() => toggleModal(!showModal)} />
            <TouchableText
              text="Update"
              handlePress={() => handleAddItem()} />
          </View >
        </View>

  )
}

export { ShopForm, ItemForm}
