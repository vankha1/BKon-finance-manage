import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const CardWidth = 337;
const CardHeight = 185;
const RowPadding = 36;
const ColPadding = 21;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 9,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        width: CardWidth,
        height: CardHeight,
        borderRadius: 10,
        backgroundColor: COLORS.mainLightBackground,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottomColor: COLORS.black,
        borderBottomWidth: 2,
        width: "100%",
    },
    mainContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: RowPadding,
        paddingRight: RowPadding,
        width: "70%",
    },
    progressBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    description: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        paddingRight: RowPadding,
    },
});
export default styles;
