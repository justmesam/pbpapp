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

});
