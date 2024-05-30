import axios from "axios";
import { Config } from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getIncomeMonthly = async (endDate, startDate) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${Config.API_URL}/incomes`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        startDate: startDate,
        endDate: endDate,
        minAmount: 0,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
