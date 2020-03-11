import React, { Fragment, useContext, useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { TouchableText } from '../../common'
import { logout } from '../../../data/api/actions'
import { StoreContext} from '../../../data/context/store.context'

import LogoutImg from '../../../resources/logout.png'
import MenuImg from '../../../resources/menu.png'

import styles from '../styles'

const Header = () => {
  const { store, dispatch } = useContext(StoreContext)

  const { navigation } = store

  return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerSection}
          onPress={() => navigation.toggleDrawer()}>
          <Image source={MenuImg} style={styles.headerImage}/>
        </TouchableOpacity>
      <View style={styles.headerSection}>
        <Text style={styles.headerLabel}>Pbp App</Text>
      </View>
        <TouchableOpacity
          style={{...styles.headerSection, ...styles.lastSection}}
          onPress={() => logout(dispatch)}>
          <Image source={LogoutImg} style={styles.headerImage}/>
        </TouchableOpacity>
      </View>
  )
}

export default Header;
