import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../../../constants";
const itemWidth = 309;
const itemHeight = 97;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        backgroundColor: COLORS.mainLightBackground,
    },
    contentContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 45,
        backgroundColor: COLORS.mainLightBackground,
        paddingBottom: 150,
        paddingTop: 45,
    },
    balance: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",
        width: itemWidth,
        height: itemHeight,
    },
    search: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    searchTitle: {
        fontFamily: FONTFAMILIES.semiBold,
        fontSize: SIZES.xxSmall,
        color: COLORS.black,
    },
    content: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",
        width: itemWidth,
        gap: 10,
    },
    title: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.xMedium,
        color: COLORS.black,
    },
    titleContent: {
        fontFamily: FONTFAMILIES.regular,
        fontSize: SIZES.tiny,
        marginBottom: 0,
        marginBottom: -7,
    },
    amount: {
        fontFamily: FONTFAMILIES.semiBold,
        fontSize: SIZES.xMedium,
        color: COLORS.black,
        marginBottom: 0,
    },
});
export default styles;
