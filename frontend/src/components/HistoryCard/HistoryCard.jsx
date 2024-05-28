import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

import { COLORS } from "@/constants";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HistoryCard = ({
  type,
  money,
  bankName,
  timeTransaction,
  iconType,
  bgColorIcon,
  colorIcon,
}) => {
  return (
    <View style={styles.container}>
      <IconWrapper
        iconType={iconType}
        size={24}
        bgColor={bgColorIcon}
        colorIcon={colorIcon}
        LibIcon={MaterialCommunityIcons}
        className={{ borderWidth: 1, borderColor: COLORS.buttonBg }}
      />

      <View style={styles.textContent}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.typeName}>{type}</Text>
          <Text style={styles.typeName}>
            {"$"}
            {money}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.typeBank}>{bankName}</Text>
          <Text style={styles.typeBank}>{timeTransaction}</Text>
        </View>
      </View>
    </View>
  );
};
export default HistoryCard;
