import AsyncStorage from '@react-native-community/async-storage';

const storeToken = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.error(`AsyncStorage error: ${error.message}`);
  }
};

const removeToken = async item => {
  try {
    await AsyncStorage.removeItem(item);
    return true;
  } catch (error) {
    console.log(`AsyncStorage error: ${error.message}`);
    return false;
  }
};

const retrieveToken = async item => {
  try {
    const value = await AsyncStorage.getItem(item);
    return value;
  } catch (error) {
    console.log(`AsyncStorage error: ${error.message}`);
    return null;
  }
};

export { storeToken, removeToken, retrieveToken };
