import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";

const cardWidth = "90%";
const iconSideWidth = 30;

const styles = StyleSheet.create({
    container: { backgroundColor: COLORS.mainLightBackground },

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        height: "100%",
        gap: 20,
    },
    card: {
        backgroundColor: "#fff",
        width: cardWidth,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        height: 60,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
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
    cardEleWithIcon_Left: {
        width: iconSideWidth,
        alignItems: "center",
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    dateTitle: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.xSmall,
        color: COLORS.buttonBg,
    },
    buttonContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        gap: 10,
    },
    option: {
        fontSize: 16,
        padding: 10,
        color: COLORS.gray2,
    },
    dateTitle: {
        fontSize: 16,
        color: COLORS.buttonBg,
    },
    textAreaContainer: {
        borderColor: COLORS.gray2,
        borderWidth: 1,
        padding: 5,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
    },
    remaining: {
        flexDirection: "row",
        width: "90%",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
    },
    amount: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    blankAmount: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 12,
        borderRadius: 20,
    },
    underline: {
        width: "50%",
        marginTop: 12,
        borderTopColor: COLORS.buttonBg,
        borderTopWidth: 1,
    },
    amountText: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.nLarge,
    },
    contentText: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.medium,
    },
    smallText: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.xSmall,
    },
});

export default styles;
