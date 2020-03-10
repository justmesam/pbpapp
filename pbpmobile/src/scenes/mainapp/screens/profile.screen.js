import React, { Fragment, useContext, useState, useEffect } from 'react';
import moment from 'moment'
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native';

import { TouchableText, Input, UpdateDetails } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import { updateUserAction, fetchUserAction } from '../../../data/api/actions'

const Profile = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { user } = store

  const [ showModal, toggleModal] = useState(false)
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

  const handleUpdate = () => {
    updateUserAction(dispatch, userDetails)
    toggleModal(!showModal)
    fetchUserAction(dispatch)
  }

  return (
      <View>
        <Modal isVisible={showModal} onBackdropPress={() => toggleModal(!showModal)}>
          <UpdateDetails
            showModal={showModal}
            toggleModal={toggleModal}
            handleDetails={handleDetails}
            userDetails={userDetails}
            handleUpdate={handleUpdate} />
        </Modal>
        <Text> Name: {user.username} </Text>
        <Text> Email: {user.email} </Text>
        <Text> Date Joined: {moment(user.dateJoined).format("DD/MM/YYYY")} </Text>
        {
          !user.isVendor &&
          <TouchableText
            text="Become a Vendor"
            handlePress={() => {}} />
        }

        <TouchableText
          text="Edit Details"
          handlePress={() => toggleModal(!showModal)} />
      </View>
  )
}

export default Profile;
