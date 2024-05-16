import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
const border_card = 20;
const item_width = 329;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: 22,
        backgroundColor: COLORS.mainLightBackground,
    },
    financeContainer: {
        marginTop: 33,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 15,
        width: item_width,
        borderRadius: 20,
        backgroundColor: "white",
    },
    addWidget: {
        borderRadius: border_card,
        backgroundColor: "#fff",
        width: item_width,
        height: 35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
    },
});
export default styles;
