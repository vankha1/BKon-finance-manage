import { View } from "react-native";
import styles from "./styles";
<<<<<<< HEAD
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
const IconWrapper = ({ iconType, size, bgColor, colorIcon, componentType }) => {
    return (
        <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
            {componentType === "MaterialCommunityIcons" ? (
                <MaterialCommunityIcons
                    name={iconType}
                    size={size}
                    color={colorIcon}
                />
            ) : (
                <Octicons name={iconType} size={size} color={colorIcon} />
            )}
        </View>
    );
=======
const IconWrapper = ({ iconType, size, bgColor, colorIcon, LibIcon, className }) => {
  return (
    <View style={[styles.iconWrapper, { backgroundColor: bgColor, ...className }]}>
      <LibIcon name={iconType} size={size} color={colorIcon}/>
    </View>
  );
>>>>>>> 279963b41d7ab62be1a0fdd27d04b531b76142f2
};
export default IconWrapper;
