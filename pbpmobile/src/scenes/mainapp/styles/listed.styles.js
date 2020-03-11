import { StyleSheet, Dimensions } from 'react-native';

import { Colors as Constants } from '../../common'

import { tile } from './home.styles'

export default StyleSheet.create({
  orderTile: {
    ...tile,
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: Constants.LightGreen,
    borderRightWidth: 2,
  },
  orderTileSection: {
    width: '50%',
    marginTop: 12,
  },
  orderDetails: {
    color: Constants.Gray
  },
  orderIdSection: {
    flexDirection: 'row',
    marginTop: 5,
  },
  orderId: {
    color: Constants.Gray,
    fontSize: 12,
    flexShrink: 1,
    lineHeight: 20
  },
  orderTotal: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Constants.Gray
  },
  cartTotal: {
    fontWeight: 'bold',
    color: Constants.LightGreen,
  }
});
