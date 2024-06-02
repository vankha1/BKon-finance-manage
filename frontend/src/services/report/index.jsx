import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Config } from "@/config";

export const getReportByType = async (type, query, params) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${Config.API_URL}/report/${type}/${query}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getReportByCategory = async (type) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${Config.API_URL}/${type}/stats/amount`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTwoReports = async (type1, type2) => {
  const token = await AsyncStorage.getItem("token");
  return await Promise.all([
    axios.get(`${Config.API_URL}/report/${type1}/month`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    axios.get(`${Config.API_URL}/report/${type2}/month`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
};
