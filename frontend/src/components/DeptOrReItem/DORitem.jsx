import { View, Text, Pressable, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import IconWrapper from "../Icon/Icon";
import { COLORS } from "@/constants";
import styles from "./styles";
import { LocalizationKey, i18n } from "@/localization";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { convertNumber } from "@/utils";
const DORitem = ({
  id,
  note,
  type,
  amount,
  remaining,
  date,
  month,
  year,
  time,
}) => {
  const navigator = useNavigation();
  console.log("type: ", type);
  const progress = (amount - remaining) / amount;
  console.log("amount: ", amount);
  console.log("remaining: ", remaining);
  console.log("progress: ", progress);
  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);
  return (
    <Pressable
      style={styles.container}
      onPress={
        type === "debts"
          ? () =>
              navigator.navigate("Transaction", {
                type: "Paying",
                name: "debt",
                id: id,
                amountInfo: {
                  amount: amount,
                  remaining: remaining,
                },
              })
          : () =>
              navigator.navigate("Transaction", {
                type: "Paying",
                name: "receivable",
                id: id,
                amountInfo: {
                  amount: amount,
                  remaining: remaining,
                },
              })
      }
    >
      <View style={styles.header}>
        <IconWrapper iconType={"dollar"} LibIcon={FontAwesome} size={30} />
        <Text style={styles.headerText}>
          {note ? note : i18n.t(LocalizationKey.NO_NOTE)}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>
            {type === "debts"
              ? i18n.t(LocalizationKey.YOUR_DEBT)
              : i18n.t(LocalizationKey.YOUR_RECEIVABLE)}
          </Text>
          <Text style={[styles.contentText, { fontWeight: "bold" }]}>
            {convertNumber(amount)}
          </Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.contentText}>
            {i18n.t(LocalizationKey.REMAINING)}
          </Text>
          <Text style={[styles.contentText, { fontWeight: "bold" }]}>
            {convertNumber(remaining)}
          </Text>
        </View>

        <View style={styles.progressBar}>
          <Progress.Bar
            progress={amount > 0 ? progress : 1}
            //width={220}
            height={4}
            width={Dimensions.get("window").width * 0.6}
            borderWidth={0}
            unfilledColor={COLORS.gray3}
            color={COLORS.buttonBg}
          />
        </View>

        <View style={styles.description}>
          <Text style={styles.contentText}>
            {i18n.t(LocalizationKey.CREATED_ON)} {date} {month} {year} {time}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default DORitem;
