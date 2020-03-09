import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { TouchableText } from '../../common'
import { StoreContext} from '../../../data/context/store.context'

const Profile = () => {
  const { store } = useContext(StoreContext)
  const { user } = store
  return (
      <View>
        <Text> Name: {user.username} </Text>
        <Text> Email: {user.email} </Text>
        {
          !user.isVendor &&
          <TouchableText
            text="Become a Vendor"
            handlePress={() => {}} />
        }
      </View>
  )
}

export default Profile;
