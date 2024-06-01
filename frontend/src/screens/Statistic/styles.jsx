import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
var maxWidth = Dimensions.get("window").width; //full width
var maxHeight = Dimensions.get("window").height; //full height
const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    height: maxHeight + 34,
    padding: 20,
    backgroundColor: COLORS.mainLightBackground,
  },
  pressableList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
  },
  btn: {
    width: "45%",
    height: 80,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
});

export default styles;
