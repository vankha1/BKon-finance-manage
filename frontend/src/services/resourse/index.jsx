import axios from 'axios'
import { Config } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getResources = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/cashes`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {},
        };
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getResourceById = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/cashes/${id}`,
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

export const createResource = async (resourceName, balance) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "POST",
            url: `${Config.API_URL}/cashes`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: { name: resourceName, balance },
        };
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }
}