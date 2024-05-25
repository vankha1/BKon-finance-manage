import { Text, View } from "react-native";
import IconWrapper from "../Icon/Icon";
const BalanceItem = ({ iconType, title, value, LibIcon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <IconWrapper
                    iconType={iconType}
                    size={24}
                    bgColor={"#F5F5F5"}
                    colorIcon={"#000"}
                    LibIcon={LibIcon}
                    className={{ padding: 10, borderRadius: 10 }}
                />
                <Text style={styles.text_title}>{title}</Text>
            </View>
            <Text style={styles.text_amount}>{value}</Text>
        </View>
    );
};
export default BalanceItem;
