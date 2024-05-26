import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    selectInput: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        gap: 10,
    },
    typeName: {
        fontFamily: FONTFAMILIES.medium,
        fontSize: 16,
    },
    progressContent: {
        flex: 1,
        flexDirection: "row",
    },
});

export default styles;
