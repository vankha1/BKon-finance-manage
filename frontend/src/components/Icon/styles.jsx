import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    iconWrapper: {
        //width: 45,

        borderRadius: 200,
    },
    borderSmall: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 35,
        height: 35,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: COLORS.buttonBg,
    },
    borderLarge: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 35,
        height: 35,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: COLORS.buttonBg,
    },
});

export default styles;
