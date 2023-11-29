import AsyncStorage from "@react-native-async-storage/async-storage";

// get Item
export async function getItem(key) {
    try {
        return await AsyncStorage.getItem(key);
    }catch (error) {
        console.log(error);
    }
}


// set Item
export async function setItem(key, value = '') {
    try {
        return await AsyncStorage.setItem(key, value);
    }catch (error) {
        console.log(error);
    }
}


// remove Item 
export async function removeItem(key) {
    try {
        return await AsyncStorage.removeItem(key);
    }catch (error) {
        console.log(error);
    }
}