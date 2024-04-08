import { View } from "react-native";
import styles from "./styles";
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
};
export default IconWrapper;
