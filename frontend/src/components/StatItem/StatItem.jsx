import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import IconWrapper from "../Icon/Icon";
import styles from "./styles";
import { SIZES } from "@/constants";

const StatItem = ({
    iconName,
    titleReport,
    className,
    iconStyle,
    textStyle,
    onPress,
    LibIcon,
}) => {
    return (
        <Pressable
            style={[styles.statItemContainer, className]}
            onPress={onPress}
        >
            <LibIcon name={iconName} size={SIZES.xLarge} style={iconStyle} />
            <Text style={[styles.statItemText, textStyle]}>{titleReport}</Text>
            <Text></Text>
        </Pressable>
    );
};

export default StatItem;
