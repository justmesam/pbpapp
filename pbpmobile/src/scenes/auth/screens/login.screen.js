import React, { useState, useContext } from 'react';
import { Text, View, TextInput } from 'react-native';

import { login } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'

import styles from '../styles'

const defaultValues = { email: '', password: ''}

const Login = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(defaultValues)
  const { dispatch } = useContext(StoreContext)

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleLogin = () => {
    login(dispatch, userDetails)
  }

  return (
    <View style={styles.container}>
      <Text> Log in</Text>
      <Text> Please log in to your account;</Text>
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
      <TouchableText
        text="Login"
        handlePress={() => handleLogin()}
        />
      <TouchableText
        text="Don't have an account? Sign Up"
        handlePress={() => navigation.navigate('SignUp')}
        />
    </View>
  );
}

export default Login
