import React, { Fragment, useContext, useState, useEffect } from 'react';
import moment from 'moment'
import Modal from "react-native-modal";
import { View, Text, Image } from 'react-native';

import { TouchableText, Input, UpdateDetails, ShopForm } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import { updateUserAction, fetchUserAction } from '../../../data/api/actions'

import UserImg from '../../../resources/user.png'
import styles from '../styles'

const defultShop = { name: '', latitude: '', longitude: ''}

export const capitalize = (word) => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const Profile = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { user } = store

  const [ showModal, toggleModal] = useState(false)
  const [ shopCreate, setShopCreate] = useState({
     modal: false,  shopDetails: defultShop
   })
  const [userDetails, setUserDetails] = useState({
    username: user.username,
    email: user.email,
    isVendor: user.isVendor,
  })

  useEffect(() => {
    fetchUserAction(dispatch)
  }, [])

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleUpdate = (details) => {
    updateUserAction(dispatch, details)
    toggleModal(!showModal)
    fetchUserAction(dispatch)
  }

  const handleShopModal = () => {
    toggleModal(!showModal)
    setShopCreate({...shopCreate, modal: !setShopCreate.modal })
  }

  const handleShopDetails = (key, text) => {
    setShopCreate({...shopCreate,
      shopDetails: {...shopCreate.shopDetails, [key] : text}})
  }


  return (
      <View style={styles.Container}>
        <Modal isVisible={showModal}>
          {shopCreate.modal
            ? <ShopForm
                showModal={showModal}
                toggleModal={handleShopModal}
                handleDetails={handleShopDetails}
                shopDetails={shopCreate.shopDetails}
                handleShopCreate={handleUpdate} />
            : <UpdateDetails
                showModal={showModal}
                toggleModal={toggleModal}
                handleDetails={handleDetails}
                userDetails={userDetails}
                handleUpdate={handleUpdate} />}

        </Modal>
        <View style={styles.userDetails}>
          <View style={styles.imageSection}>
            <Image source={UserImg} style={styles.userImage}/>
          </View>
          <View style={styles.detailsSection}>
              <Text style={{
                ...styles.userDetail,
                ...styles.userName}}>
                {capitalize(user.username)}
              </Text>
              <View style={styles.divider}></View>
            <Text style={styles.userDetail}>{user.email} </Text>
            <Text style={styles.userDetail}>
              Date Joined: {moment(user.dateJoined).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
        {
          !user.isVendor &&
          <TouchableText
            text="Become a Vendor"
            handlePress={() => toggleModal(!showModal)} />
        }

        {
          user.isVendor &&
          (Object.keys(user.shop).length < 1
            ? <TouchableText
                text="Create a shop"
                handlePress={() => handleShopModal()} />
            : <View>
                <Text> Shop</Text>
                <Text> name: {user.shop.name} </Text>
                <Text> Date Created: {moment(user.shop.dateCreated).format("DD/MM/YYYY")} </Text>
              </View>)
        }

        <TouchableText
          text="Edit Details"
          handlePress={() => toggleModal(!showModal)} />
      </View>
  )
}

export default Profile;
