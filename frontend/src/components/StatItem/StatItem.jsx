import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

const StatItem = ({
  iconName,
  titleReport,
  className,
  iconStyle,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable style={[styles.statItemContainer, className]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={30} style={iconStyle} />
      <Text style={[styles.statItemText, textStyle]}>{titleReport}</Text>
    </Pressable>
  );
};

export default StatItem;
