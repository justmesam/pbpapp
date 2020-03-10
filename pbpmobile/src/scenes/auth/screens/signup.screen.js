import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { signup } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'

import styles from '../styles'

const defaultValues = { username: '', email: '', password: '', isVendor: false}

const SignUp = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(defaultValues)
  const { dispatch } = useContext(StoreContext)

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleSignup = () => {
    console.log(">>>>>>>>   ", userDetails);
    signup(dispatch, userDetails)
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Text> Please sign up to use pbpapp;</Text>
      <Input
        placeholder="Username"
        value={userDetails.username}
        handleOnchange={(text) => handleDetails('username', text)}
        />
      <Input
        placeholder="Email"
        value={userDetails.email}
        handleOnchange={(text) => handleDetails('email', text)}
        keyboardType={'email-address'}
        />
        <Input
          placeholder="Password"
          value={userDetails.password}
          secureTextEntry={true}
          handleOnchange={(text) => handleDetails('password', text)}
          />
      <CheckBox
        title='Sign Up as a vendor'
        iconRight
        checked={userDetails.isVendor}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={() => handleDetails('isVendor', !userDetails.isVendor)}
        />
      <TouchableText
        text="Sign Up"
        handlePress={() => handleSignup()}
        />
      <TouchableText
        text="Already have an account? Log in"
        handlePress={() => navigation.navigate('Login')}
        />
    </View>
  );
}

export default SignUp
