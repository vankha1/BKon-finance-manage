import { View, Text, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import styles from "../styles";
import IconWrapper from "@/components/Icon/Icon";
import { SIZES } from "@/constants";
import Header from "@/components/Header/Header";
import FinanceResources from "@/components/FinanceResource/FinanceResources";
import { getResourceById } from "@/services";
import { useSelector } from "react-redux";
import { LocalizationKey, i18n } from "@/localization";

const CurrentCash = () => {
  const params = useRoute().params;
  const [resource, setResource] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const localeState = useSelector((state) => state.locale);
  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);
  console.log("Navigation options in each resource", params);

  useEffect(() => {
    const getResourseById = async () => {
      try {
        setIsLoading(true);

        const response = await getResourceById(params.id);
        // console.log(response);
        setResource(response);

        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    getResourseById();
    // console.log(resource);
  }, []);

  return (
    <>
      <Header
        title={params.name}
        iconName={"cash"}
        libIcon={MaterialCommunityIcons}
      />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.balance}>
              <Text style={styles.title}>
                {i18n.t(LocalizationKey.CURRENT_BALANCE)}
              </Text>
              <Text style={styles.amount}>{` ${params.amount}`}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.search}>
                <Text style={styles.searchTitle}>
                  {i18n.t(LocalizationKey.TRANSACTION_HISTORY)}
                </Text>
                <IconWrapper
                  iconType={"search"}
                  LibIcon={Feather}
                  size={SIZES.medium}
                ></IconWrapper>
              </View>
              <View>
                {isLoading ? (
                  <ActivityIndicator size={"large"} />
                ) : resource &&
                  resource?.incomes?.length === 0 &&
                  resource?.expenses?.length === 0 ? (
                  <Text style={styles.text}>No transactions yet</Text>
                ) : (
                  [
                    ...(resource?.incomes || []),
                    ...(resource?.expenses || []),
                  ]?.map((item, index) => {
                    return (
                      <FinanceResources
                        title={item.spendOn}
                        iconName={"shirt-outline"}
                        amount={item.amount}
                        subTitle={params.name}
                        Time={format(item.createdAt, "dd/MM/yyyy    HH.mm")}
                        libIcon={Ionicons}
                        key={index}
                      />
                    );
                  })
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default CurrentCash;
