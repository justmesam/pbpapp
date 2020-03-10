import React, { Fragment, useContext, useState, useEffect } from 'react';
import moment from 'moment'
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native';

import { TouchableText, Input } from '../../common'
import { StoreContext} from '../../../data/context/store.context'
import { updateUserAction } from '../../../data/api/actions'

const Profile = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { user } = store

  const [ showModal, toggleModal] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: user.username,
    email: user.email,
    isVendor: user.isVendor,
  })


  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleUpdate = () => {
    updateUserAction(dispatch, userDetails)
  }

  return (
      <View>
        <Modal isVisible={showModal} onBackdropPress={() => toggleModal(!showModal)}>
          <View >
            <Input
              placeholder="Username"
              value={userDetails.username}
              handleOnchange={(text) => handleDetails('username', text)}
              />
            <Input
              placeholder="Email"
              value={userDetails.email}
              handleOnchange={(text) => handleDetails('email', text)}
              />
              <CheckBox
                title='User is vendor'
                iconRight
                checked={userDetails.isVendor}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={() => handleDetails('isVendor', !userDetails.isVendor)}
              />
            <View>
              <TouchableText
                text="Cancel"
                handlePress={() => toggleModal(!showModal)} />
              <TouchableText
                text="Update"
                handlePress={() => handleUpdate()} />
            </View >
          </View>
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
