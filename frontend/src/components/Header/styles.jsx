import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";

const styles = StyleSheet.create({
    headerWithIcon: {
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
    header: {
        width: "100%",
        backgroundColor: COLORS.headerBg,
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 20,
        justifyContent: "space-between",
    },

    titleWithIcon: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    contentWithEdit: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backBtn: {
        color: "white",
        zIndex: 1,
        marginLeft: 38,
        marginRight: -38,
    },
    editStyle: {
        fontSize: SIZES.medium,
        fontFamily: FONTFAMILIES.semiBold,
        color: "white",
        marginRight: 29,
        marginLeft: -29,
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
