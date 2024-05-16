import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTFAMILIES } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    text_title: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.xSmall,
        color: COLORS.black,
    },
    text_amount: {
        fontFamily: FONTFAMILIES.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
});
