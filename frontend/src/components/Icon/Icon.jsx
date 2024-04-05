import { View } from "react-native";
import styles from "./styles";
const IconWrapper = ({ iconType, size, bgColor, colorIcon, LibIcon }) => {
  return (
    <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
      <LibIcon name={iconType} size={size} color={colorIcon}/>
    </View>
  );
};
export default IconWrapper;
