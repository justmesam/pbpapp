import React from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native';

import Input from './input'
import TouchableText from './touchableText'

import * as Colors from './colors'
import styles from './styles'



const UpdateDetails = ({ userDetails, handleDetails, toggleModal, handleUpdate, showModal}) => {
  return (
        <View style={styles.modalContentStyles}>
          <Text style={styles.modalHeader} >Update Details;</Text>
          <Input
            inputStyles={styles.modalInput}
            placeholder="Username"
            value={userDetails.username}
            handleOnchange={(text) => handleDetails('username', text)}
            />
          <Input
            inputStyles={styles.modalInput}
            placeholder="Email"
            value={userDetails.email}
            handleOnchange={(text) => handleDetails('email', text)}
            />
            <CheckBox
              title='Become as a vendor'
              checkedColor={Colors.Red}
              textStyle={styles.textStyle}
              containerStyle={styles.containerStyle}
              checked={userDetails.isVendor}
              onPress={() => handleDetails('isVendor', !userDetails.isVendor)}
              />
          <View style={styles.buttonSection}>
            <TouchableText
              text="Cancel"
              styleType="button"
              touchStyles={styles.modalButtonDefault}
              handlePress={() => toggleModal(!showModal)} />
            <TouchableText
              text="Update"
              styleType="button"
              touchStyles={{...styles.modalButton, ...styles.modalButtonDefault}}
              handlePress={() => handleUpdate(userDetails)} />
          </View>
        </View>

  )
}

export default UpdateDetails;
