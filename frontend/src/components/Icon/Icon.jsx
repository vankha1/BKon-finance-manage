import { View } from "react-native";
import styles from "./styles";
const IconWrapper = ({
    iconType,
    size,
    bgColor,
    colorIcon,
    LibIcon,
    className,
    haveBorder,
    borderSize,
}) => {
    return (
        <View
            style={[
                styles.iconWrapper,
                { backgroundColor: bgColor, ...className },
                haveBorder &&
                    (borderSize === "small"
                        ? styles.borderSmall
                        : styles.borderLarge),
            ]}
        >
            <LibIcon name={iconType} size={size} color={colorIcon} />
        </View>
    );
};
export default IconWrapper;
