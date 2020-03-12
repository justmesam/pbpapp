import React from 'react';
import { View, Text } from 'react-native';

import Input from './input'
import TouchableText from './touchableText'

import styles from './styles'

const ShopForm = ({ shopDetails, handleDetails, toggleModal, handleShopCreate}) => {
  return (
        <View style={styles.modalContentStyles}>
          <Text style={styles.modalHeader} >Create a Shop;</Text>
          <Input
            inputStyles={styles.modalInput}
            placeholder="Shop name"
            value={shopDetails.name}
            handleOnchange={(text) => handleDetails('name', text)}
            />
          <Input
            inputStyles={styles.modalInput}
            placeholder="longitude"
            value={shopDetails.longitude}
            handleOnchange={(text) => handleDetails('longitude', text)}
            keyboardType={'numeric'}
            />
          <Input
            inputStyles={styles.modalInput}
            placeholder="latitude"
            value={shopDetails.lattitude}
            handleOnchange={(text) => handleDetails('latitude', text)}
            keyboardType={'numeric'}
            />
          <View style={styles.buttonSection}>
            <TouchableText
              text="Cancel"
              styleType="button"
              textStyles={styles.modalText}
              touchStyles={styles.modalButtonDefault}
              handlePress={() => toggleModal()} />
            <TouchableText
              text="Create Shop"
              styleType="button"
              textStyles={styles.modalText}
              touchStyles={{...styles.modalButton, ...styles.modalButtonDefault}}
              handlePress={() => handleShopCreate({ shop : shopDetails})} />
          </View>
        </View>

  )
}

const ItemForm = ({ itemDetails, handleDetails, toggleModal, handleAddItem, showModal}) => {
  return (
        <View style={styles.modalContentStyles}>
          <Text style={styles.modalHeader} >Create an Item;</Text>
          <Input
            inputStyles={styles.modalInput}
            placeholder="Item name"
            value={itemDetails.name}
            handleOnchange={(text) => handleDetails('name', text)}
            />
          <Input
            inputStyles={styles.modalInput}
            placeholder="price"
            value={itemDetails.price}
            handleOnchange={(text) => handleDetails('price', text)}
            keyboardType={'numeric'}
            />
          <View style={styles.buttonSection}>
            <TouchableText
              text="Cancel"
              styleType="button"
              textStyles={styles.modalText}
              touchStyles={styles.modalButtonDefault}
              handlePress={() => toggleModal(!showModal)} />
            <TouchableText
              text="Add Item"
              styleType="button"
              textStyles={styles.modalText}
              touchStyles={{...styles.modalButton, ...styles.modalButtonDefault}}
              handlePress={() => handleAddItem()} />
          </View>
        </View>

  )
}

export { ShopForm, ItemForm}
