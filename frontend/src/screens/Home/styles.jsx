import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const cardWidth = 309;
const iconSideWidth = 60;
const border_card = 20;
const addWidgetHeight = 35;
const addWidgetWidth = 218;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: COLORS.mainLightBackground,
        height: "100%",
    },
    header: {
        backgroundColor: COLORS.headerBg,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    upper_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
        paddingTop: 17,
        paddingBottom: 10,
    },
    avatar: {
        borderRadius: 50,
        backgroundColor: COLORS.white,
        width: 35,
        height: 35,
    },
    downer_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingTop: 45,
        paddingBottom: 40,
    },
    balance: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 31,
    },
    container_cards: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        gap: 26,
        // backgroundColor: COLORS.mainLightBackground,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        borderRadius: border_card,
        backgroundColor: "#fff",
        width: cardWidth,
        flexDirection: "row",
        height: 97,
    },
    cardWith2Elements: {
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        paddingLeft: 30,
        gap: 20,
        fontSize: SIZES.medium,
    },
    cardEleWithIcon_Left: {
        width: iconSideWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    cardEleWithIcon_Right: {
        width: cardWidth - iconSideWidth,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 6,
        paddingTop: 10,
    },
    belowBarProgress: {
        width: cardWidth - iconSideWidth,
        fontSize: SIZES.xSmall,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        paddingRight: 29,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.buttonBg,
    },
    addWidget: {
        borderRadius: border_card,
        backgroundColor: "#fff",
        width: addWidgetWidth,
        height: addWidgetHeight,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
