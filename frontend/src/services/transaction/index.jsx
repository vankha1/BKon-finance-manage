import axios from "axios";
import { Config } from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTransactionPeriod = async (type, startDate, endDate) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${Config.API_URL}/${type}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        startDate: startDate,
        endDate: endDate,
        amount: 0,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
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
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTransaction = async (type, id, data) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "PUT",
      url: `${Config.API_URL}/${type}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteTransaction = async (type, id) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "DELETE",
      url: `${Config.API_URL}/${type}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("idAPI: ", id);
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
