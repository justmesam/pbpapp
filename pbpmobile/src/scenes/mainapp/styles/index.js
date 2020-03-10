import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../common'

const window = Dimensions.get("screen");

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.White,
    flexDirection : 'row',
    width: window.width,
    justifyContent: 'space-around'
  },
});
