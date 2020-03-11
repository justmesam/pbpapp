import { StyleSheet, Dimensions } from 'react-native';

import { Colors as Constants } from '../../common'

import { tile } from './home.styles'

export default StyleSheet.create({
  addItemButton: {
    position: 'absolute',
    top: 0,
    right: 5,
    width: 90,
    height: 35,
    elevation: 2
  },
  addItemButtonText: {
    fontSize: 15
  },
  shopDetials : {
    flexDirection: 'row'
  },
  name: {
    fontSize: 19,
    marginBottom : 2
  },
  nameValue: {
    fontSize: 17,
    lineHeight: 26
  },
  headerStyles: {
    fontWeight: 'bold',
    fontSize:25
  },
  itemsListContainer: {
    height: Constants.height - 200,
  },
  itemTile : {
    ...tile,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRightWidth: 1,
    borderColor: Constants.Gray
  },
  itemprice: {
    width: 90,
    alignItems: 'center'
  }
});
