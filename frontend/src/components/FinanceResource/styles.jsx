import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "rgba(0, 0, 0, 0.4)",
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        width: "100%",
    },
    containerWithTitle: {
        paddingLeft: 0,
    },
    titleCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    titleWithSubtitle: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4,
    },
    amountWithTime: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 4,
    },
});
export default styles;
