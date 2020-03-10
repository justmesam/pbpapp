import React, { Fragment, useContext, useState, useEffect } from 'react';
import moment from 'moment'
import Modal from "react-native-modal";
import { View, Text } from 'react-native';

import { TouchableText, Input, UpdateDetails, ShopForm } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import { updateUserAction, fetchUserAction } from '../../../data/api/actions'

const defultShop = { name: '', latitude: '', longitude: ''}

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
      <View>
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
        <Text> Name: {user.username} </Text>
        <Text> Email: {user.email} </Text>
        <Text> Date Joined: {moment(user.dateJoined).format("DD/MM/YYYY")} </Text>

        {

        }
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
