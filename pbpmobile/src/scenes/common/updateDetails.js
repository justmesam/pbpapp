import React from 'react';
import { CheckBox } from 'react-native-elements'
import { View } from 'react-native';

import { TouchableText, Input } from './index'

const UpdateDetails = ({ userDetails, handleDetails, toggleModal, handleUpdate, showModal}) => {
  return (
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

  )
}

export default UpdateDetails;
