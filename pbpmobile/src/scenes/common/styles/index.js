import { StyleSheet} from 'react-native';

import * as Constants from '../colors'

export default StyleSheet.create({
  input: {
    height: 60,
    borderColor: Constants.Gray,
    borderRadius: 5,
    borderWidth: 1,
    width: Constants.width -40,
    marginTop: 10,
    fontSize: 18
  },
  button: {
    width: Constants.width/2.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: Constants.Red,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Constants.White
  },
  containerStyle: {
    width: '90%',
    borderWidth: 0,
    backgroundColor: Constants.White,
    marginLeft: 0
  },
  textStyle: {
    fontWeight: 'normal',
    fontSize: 17,
  },
  modalContentStyles: {
    width: '100%',
    backgroundColor: Constants.LightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  modalButton: {
    backgroundColor: Constants.Green,
  },
  modalButtonDefault: {
    width: 100,
    height: 40,

  },
  buttonSection: {
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  modalInput: {
    width: '90%',
    height: 40,
    marginTop: 15,

  },
  modalHeader: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingLeft: 15
  },
  modalText: {
    fontSize: 15,
  }
});
