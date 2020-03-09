import React, { useState, useContext } from 'react';
import { Text, View, TextInput } from 'react-native';

import { login } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'


const Home = () => {

  return (
    <View>
      <Text> Items Will be displayed here </Text>
    </View>
  );
}

export default Home
