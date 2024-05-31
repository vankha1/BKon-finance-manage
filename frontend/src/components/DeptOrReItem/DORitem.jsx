import { View, Text, Pressable } from "react-native";
import * as Progress from "react-native-progress";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import IconWrapper from "../Icon/Icon";
import { COLORS } from "@/constants";
import styles from "./styles";
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
  return (
    <View>
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
          <Text style={styles.headerText}>{note ? note : "No note"}</Text>
          <Text> </Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>{type}</Text>
          <Text style={styles.contentText}>{amount}</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>Remaining</Text>
          <Text style={styles.contentText}>{remaining}</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
            progress={amount > 0 ? (amount - remaining) / amount : 0}
            //width={220}
            height={4}
            width={265}
            borderWidth={0}
            unfilledColor={COLORS.gray3}
            color={COLORS.buttonBg}
          />
        </View>

        <View style={styles.description}>
          <Text style={styles.contentText}>
            Created on {date} {month} {year} {time}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default DORitem;
