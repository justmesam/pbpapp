import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { signup } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'
import { Input, TouchableText, Colors } from '../../common'

import styles from '../styles'

const defaultValues = { username: '', email: '', password: '', isVendor: false}

const SignUp = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(defaultValues)
  const { store, dispatch } = useContext(StoreContext)

  const handleDetails = (key, text) => {
    setUserDetails({...userDetails, [key]: text})
  }

  const handleSignup = () => {
    signup(dispatch, userDetails)
  }

  return (
    <View style={styles.container}>
      <View style={styles.introText}>
        <Text style={styles.headerStyles}>Sign Up</Text>
        <View style={styles.divider}/>
        <Text style={styles.captionStyles}> Please sign up to use pbpapp;</Text>
      </View>
      {
        store.loading &&
        <View>
          <ActivityIndicator /><Text
            style={styles.captionStyles}>hold on sec we sign you up...
          </Text>
        </View>
      }
      <View style={styles.inputContainer}>
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
          checkedColor={Colors.Red}
          textStyle={styles.textStyle}
          containerStyle={styles.containerStyle}
          checked={userDetails.isVendor}
          onPress={() => handleDetails('isVendor', !userDetails.isVendor)}
          />
        <TouchableText
          text="Sign Up"
          handlePress={() => handleSignup()}
          styleType="button"
          touchStyles={styles.buttonShadow}
          />
      </View>
      <TouchableText
        touchStyles={styles.redirect}
        textStyles={styles.redirectText}
        text="Already have an account? Log in"
        handlePress={() => navigation.navigate('Login')}
        />
    </View>
  );
}

export default SignUp
