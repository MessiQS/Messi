import { AsyncStorage, Alert } from 'react-native';
export default class Storage {
    static getItem(key) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try {
            return AsyncStorage.getItem(key);
        } catch (error) {
            Alert.alert(error)
        }

    }
    static setItem({ key, value }) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try {
            return AsyncStorage.setItem(key, value);
        } catch (error) {
            return false;
            Alert.alert(error)
        }
    }
    static multiSet(argu){
        try {
            return AsyncStorage.multiSet(argu);
        } catch (error) {
            return false;
            Alert.alert(error)
        }
    }
    
    static multiGet(argu){
        try{
            return AsyncStorage.multiGet(argu);
        }catch(error){
            return false;
        }
    }
    static removeItem(key) {
        if (!key) {
            Alert.alert('没有key');
            return;
        }
        try {
            return AsyncStorage.removeItem(key);
        } catch (error) {
            return false;
            Alert.alert(error)
        }
    }
}