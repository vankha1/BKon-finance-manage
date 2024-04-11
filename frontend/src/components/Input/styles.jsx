import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderWidth: 0,
    borderColor: COLORS.gray,
    position: "relative",
  },
  input: {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    fontSize: SIZES.medium,
  },
  visiblePasswordWrapper: {
    position: "absolute",
    right: 10,
    top: 15,
  },
});

export default styles;
