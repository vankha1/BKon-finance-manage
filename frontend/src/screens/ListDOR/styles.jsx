import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.mainLightBackground,
    },
    contentContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
    },
});
export default styles;
