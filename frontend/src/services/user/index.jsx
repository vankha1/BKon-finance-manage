import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "../../config";
import axios from "axios";


export const getUserById = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/users/${id}`,
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

export const createUser = async (data) => {
    try {
        const options = {
            method: "POST",
            url: `${Config.API_URL}/users`,
            headers: {
                "Content-Type": "application/json",
            },
            data,
        };
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const loginUser = async (data) => {
    try {
        const options = {
            method: "POST",
            url: `${Config.API_URL}/auth/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data,
        };
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error)
    }
}