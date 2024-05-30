import axios from "axios";
import { Config } from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getReceivables = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${Config.API_URL}/receivables`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
