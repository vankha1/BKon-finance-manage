import axios from 'axios'
import { Config } from '@/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTransactions = async (type) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/${type}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }

}

export const getTransactionById = async (type, id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/${type}/${id}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }

}

export const createTransaction = async (type, data) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "POST",
            url: `${Config.API_URL}/${type}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data,
        };
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }
}