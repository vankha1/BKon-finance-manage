import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainLightBackground,
    },
    contentContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        paddingBottom: 200,
    },
});
export default styles;
