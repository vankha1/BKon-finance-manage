import { View, Text } from "react-native";
import IconWrapper from "../Icon/Icon";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";
import styles from "./styles";

const FinanceResources = ({ libIcon, iconName, title, amount }) => {
    return iconName ? (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <IconWrapper
                    LibIcon={libIcon}
                    iconType={iconName}
                    size={SIZES.xLarge}
                    haveBorder={true}
                    borderSize={"small"}
                ></IconWrapper>
                <Text
                    style={{
                        fontFamily: FONTFAMILIES.medium,
                        fontSize: SIZES.xSmall,
                    }}
                >
                    {title}
                </Text>
            </View>
            <Text
                style={{
                    fontFamily: FONTFAMILIES.semiBold,
                    fontSize: SIZES.xSmall,
                }}
            >
                {amount}
            </Text>
        </View>
    ) : (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <Text
                    style={{
                        fontFamily: FONTFAMILIES.medium,
                        fontSize: SIZES.xxSmall,
                    }}
                >
                    {title}
                </Text>
            </View>
            <Text
                style={{
                    fontFamily: FONTFAMILIES.semiBold,
                    fontSize: SIZES.xSmall,
                }}
            >
                {amount}
            </Text>
        </View>
    );
};
export default FinanceResources;
