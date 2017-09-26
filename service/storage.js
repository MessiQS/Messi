import { AsyncStorage ,Alert} from 'react-native';
export default class Storage {
    static async getItem(key) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try{
            let value = await AsyncStorage.getItem(key);
            return value;
        }catch(error){
            Alert.alert(error)
        }

    }
    static async setItem(key,value) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try{
            let value = await AsyncStorage.setItem(key,value);
            return true;
        }catch(error){
            return false;
            Alert.alert(error)
        }
    }
    static async removeItem(key) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try{
            let value = await AsyncStorage.removeItem(key);
            return true;
        }catch(error){
            return false;
            Alert.alert(error)
        }
    }
}