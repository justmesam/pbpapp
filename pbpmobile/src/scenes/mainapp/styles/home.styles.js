import { StyleSheet, Dimensions } from 'react-native';

import { Colors as Constants } from '../../common'

export const tile = {
  backgroundColor: Constants.White,
  alignSelf: 'center',
  justifyContent: 'center',
  width: '99%',
  height: 60,
  borderRadius: 2,
  marginTop: 2,
  marginBottom: 2,
  paddingLeft: 10,
  elevation: 3
}

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Constants.White,
    padding: 5
  },
  fallBackText: {
    alignSelf: 'center',
    marginTop: 30,
  },
  ListContainer: {
    height: Constants.height - 100,
    flexGrow: 0,
  },
  homeTiles: {
    ...tile,
  },
  homeTilesText: {
    fontSize: 17,
  },
  warningBanner: {
    ...tile,
    backgroundColor: Constants.Red,
    height: 50,
  },
  warningBannerText: {
    fontSize: 17,
    color: Constants.White
  },
  cartBanner: {
    ...tile,
    backgroundColor: Constants.Green,
    height: 50,
  },
  cartText: {
    alignSelf: 'center',
    color: Constants.White,
    fontSize: 17,
  }
});
