import { StyleSheet, Dimensions } from 'react-native';

import { Colors as Constants } from '../../common'

import homeStyles from './home.styles'
import shopStyles from './shop.styles'
import profileStyles from './profile.styles'
import listedStyles from './listed.styles'

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: Constants.White,
    flexDirection : 'row',
    width: Constants.width,
  },
  headerSection: {
    width: Constants.width/3 - 10,
    justifyContent: 'center'
  },
  headerImage: {
    width: 40,
    height: 40,
  },
  lastSection: {
    alignItems: 'flex-end',
  },
  headerLabel: {
    alignSelf: 'center',
    fontSize: 20
  }
});

export default {
  ...headerStyles,
  ...homeStyles,
  ...shopStyles,
  ...profileStyles,
  ...listedStyles,
}
