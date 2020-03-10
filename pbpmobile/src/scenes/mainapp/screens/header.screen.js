import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { TouchableText } from '../../common'
import { logout } from '../../../data/api/actions'
import { StoreContext} from '../../../data/context/store.context'

import styles from '../styles'

const Header = () => {
  const { store, dispatch } = useContext(StoreContext)

  const { navigation } = store

  return (
      <View style={styles.header}>
      <TouchableText text="Header" handlePress={() => navigation.toggleDrawer()} />
      <Text>Pbp App</Text>
      <TouchableText text="Logout" handlePress={() => logout(dispatch)} />
      </View>
  )
}

export default Header;
