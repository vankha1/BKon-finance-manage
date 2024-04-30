import { View } from "react-native";
import styles from "./styles";
const IconWrapper = ({
    iconType,
    size,
    bgColor,
    colorIcon,
    LibIcon,
    className,
}) => {
    return (
        <View
            style={[
                styles.iconWrapper,
                { backgroundColor: bgColor, ...className },
            ]}
        >
            <LibIcon name={iconType} size={size} color={colorIcon} />
        </View>
    );
};
export default IconWrapper;
