import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";
const leftMargin = 20;
const rightMargin = 29;
const styles = StyleSheet.create({
    header: {
        //marginTop: 30,
        width: "100%",
        backgroundColor: COLORS.headerBg,
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 20,
        justifyContent: "center",
    },

    titleWithIcon: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    content: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backBtn: {
        color: "white",
        //zIndex: 1,
        marginLeft: leftMargin,
        marginRight: -leftMargin,
    },
    editStyle: {
        fontSize: SIZES.medium,
        fontFamily: FONTFAMILIES.semiBold,
        color: "white",
        marginRight: rightMargin,
        marginLeft: -rightMargin,
    },
    headerTitle: {
        //flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        //marginLeft: 0,
    },
    headerTitleWithIcon: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: SIZES.xMedium,
        color: "white",
    },
    headerWithSubTitle: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    subTitle: {
        fontFamily: FONTFAMILIES.regular,
        fontSize: SIZES.xSmall,
        color: "white",
    },
});

export default styles;
