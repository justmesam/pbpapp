import React, { useState, useContext } from 'react';
import { Text, View, TextInput, ActivityIndicator } from 'react-native';

import { login } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText } from '../../common'

import styles from '../styles'

const defaultValues = { email: '', password: ''}

const Login = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(defaultValues)
  const { store, dispatch } = useContext(StoreContext)

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleLogin = () => {
    login(dispatch, userDetails)
  }

  return (
    <View style={styles.container}>
      <View style={styles.introText}>
        <Text style={styles.headerStyles}>Log in</Text>
        <View style={styles.divider}></View>
        <Text style={styles.captionStyles}>Please log in to your account;</Text>
      </View>
      {
        store.loading &&
        <View>
          <ActivityIndicator /><Text
            style={styles.captionStyles}>hold on sec we log you in...
          </Text>
        </View>
      }
      <View style={styles.inputContainer}>
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
          styleType="button"
          touchStyles={styles.buttonShadow}
          />
      </View>
      <TouchableText
        touchStyles={styles.redirect}
        textStyles={styles.redirectText}
        text="Don't have an account? Sign Up"
        handlePress={() => navigation.navigate('SignUp')}
        />
    </View>
  );
}

export default Login
