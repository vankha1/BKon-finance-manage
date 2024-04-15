import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    gap: 10,
  },
  dateTitle: {
    fontSize: 16,
    color: COLORS.buttonBg,
  },
});

export default styles;
