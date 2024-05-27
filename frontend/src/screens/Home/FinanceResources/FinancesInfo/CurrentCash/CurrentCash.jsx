import { View, Text } from "react-native";
import Header from "../../../../../components/Header/Header";
import FinanceResources from "../../../../../components/FinanceResource/FinanceResources";
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome6,
} from "@expo/vector-icons";
import styles from "../styles";
import IconWrapper from "../../../../../components/Icon/Icon";
import { SIZES } from "../../../../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "../../../../../config";
import axios from "axios";
import { format } from "date-fns";

const CurrentCash = () => {
  const params = useRoute().params;
  const [resource, setResource] = useState({});

  console.log("Navigation options in each resource", params);

  useEffect(() => {
    const getResourseById = async () => {
      const token = await AsyncStorage.getItem("token");
      const options = {
        method: "GET",
        url: `${Config.API_URL}/cashes/${params.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setResource(response.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getResourseById();
    console.log(resource);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={params.name}
        iconName={"cash"}
        libIcon={MaterialCommunityIcons}
      />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.balance}>
            <Text style={styles.title}>Current Balance</Text>
            <Text style={styles.amount}>{`$ ${params.amount}`}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.search}>
              <Text style={styles.searchTitle}>Transaction History</Text>
              <IconWrapper
                iconType={"search"}
                LibIcon={Feather}
                size={SIZES.medium}
              ></IconWrapper>
            </View>
            <View>
              {resource?.incomes?.map((item, index) => {
                return (
                  <FinanceResources
                    title={item.spendOn}
                    iconName={"shirt-outline"}
                    amount={item.amount}
                    subTitle={params.name}
                    Time={format(item.createdAt, "dd/MM/yyyy    HH.mm")}
                    libIcon={Ionicons}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CurrentCash;
