import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles'

const TouchableText = ({text, handlePress, styleType="any", touchStyles={}, textStyles={}}) => {
  const defaultStyles = {
    button: styleType === 'button' ? styles.button : styles.touchableContainer,
    buttonText: styleType === 'button' ? styles.buttonText : styles.touchableContainerText,
  }

  return (
    <TouchableOpacity
     style={{...defaultStyles.button, ...touchStyles}}
     onPress={handlePress}
   >
     <Text style={{...defaultStyles.buttonText, ...textStyles}}>{text}</Text>
   </TouchableOpacity>
  );
}

export default TouchableText
