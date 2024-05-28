import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Config } from "@/config";

export const getReportByType = async (type, query, params) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const options = {
            method: "GET",
            url: `${Config.API_URL}/report/${type}?${query}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params,
        };
        const response = await axios.request(options)
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
    }
}