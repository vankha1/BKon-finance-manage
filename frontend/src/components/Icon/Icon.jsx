import { View } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const IconWrapper = ({ iconType, size, bgColor, colorIcon }) => {
  return (
    <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
      <MaterialCommunityIcons name={iconType} size={size} color={colorIcon}/>
    </View>
  );
};
export default IconWrapper;
