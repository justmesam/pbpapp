import { StyleSheet, Dimensions } from 'react-native';

import { Colors as Constants } from '../../common'

import { tile } from './home.styles'

export default StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    marginTop: 20,
    width: '99%'
  },
  imageSection: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    backgroundColor: Constants.LightGray,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  detailsSection: {
    width: '50%',
    alignItems: 'flex-start',
    paddingTop: 20
  },
  userImage: {
    width: 100,
    height: 110,
  },
  userDetail: {
    fontWeight: '300',
    fontSize: 17,
    color: Constants.LightGreen,
  },
  userName: {
    fontSize: 25,
    color: Constants.Black,
    fontWeight: '600',

  },
  divider: {
    width: 60,
    borderWidth: 3,
    borderColor: Constants.Green,
    marginTop: 5,
    marginBottom: 5,
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: Constants.LightGreen,
    elevation: 5
  },
  createShopButton: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    backgroundColor: Constants.LightRed,
    elevation: 5
  },
  userShop: {
    marginTop: 20,
    marginLeft: 20,
  }
});
