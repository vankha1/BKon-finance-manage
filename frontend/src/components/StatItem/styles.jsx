import { StyleSheet } from "react-native";
import { FONTFAMILIES, SIZES } from "../../constants";

const styles = StyleSheet.create({
    statItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        paddingHorizontal: 10,
    },
    statItemText: {
        fontSize: SIZES.xxSmall,
        fontFamily: FONTFAMILIES.semiBold,
        flexShrink: 1
    },
});

export default styles;
