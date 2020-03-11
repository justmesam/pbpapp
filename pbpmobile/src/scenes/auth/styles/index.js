import { StyleSheet} from 'react-native';

import { Colors as Constants } from '../../common'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyles: {
    fontWeight: 'bold',
    fontSize:30
  },
  captionStyles: {
    color: Constants.Gray,
    fontSize: 15
  },
  buttonShadow: {
    elevation: 5
  },
  introText: {
    width: Constants.width - 40,
    alignSelf: 'center'
  },
  divider: {
    width: 60,
    borderWidth: 5,
    borderColor: Constants.Red,
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  redirect: {
    marginTop: 30,
  },
  redirectText: {
    fontSize: 15
  },
  containerStyle: {
    width: Constants.width - 40,
    borderWidth: 0,
    backgroundColor: Constants.White,
    paddingLeft: 0,
  },
  textStyle: {
    fontWeight: 'normal',
    fontSize: 15,
    paddingLeft: 0,
  }
});
