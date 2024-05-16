import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    header: {
        //marginTop: 30,
        backgroundColor: COLORS.headerBg,
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 20,
        justifyContent: "center",
    },
    content: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
    },
    backBtn: {
        color: "white",
        //zIndex: 1,
        marginLeft: -20,
        marginRight: 20,
    },
    headerTitle: {
        //flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        //marginLeft: 0,
    },
});

export default styles;
