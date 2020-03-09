import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { signup } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'

import styles from '../styles'

const defaultValues = { username: '', email: '', password: '', isVendor: false}

const SignUp = () => {
  const [userDetails, setUserDetails] = useState(defaultValues)
  const { dispatch } = useContext(StoreContext)

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleSignup = () => {
    signup(dispatch, userDetails)
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Text> Please sign up to use pbpapp;</Text>
      <Input
        placeholder="Username"
        value="Username"
        handleOnchange={(text) => handleDetails('username', text)}
        />
      <Input
        placeholder="Email"
        value="Email"
        handleOnchange={(text) => handleDetails('email', text)}
        />
      <Input
        placeholder="Password"
        value="Password"
        handleOnchange={(text) => handleDetails('email', text)}
        />
      <TouchableText
        text="Sign Up"
        handlePress={() => handleSignup()}
        />
    </View>
  );
}

export default SignUp
