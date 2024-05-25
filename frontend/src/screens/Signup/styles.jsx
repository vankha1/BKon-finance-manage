import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

var maxWidth = Dimensions.get("window").width; //full width
var maxHeight = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    height: maxHeight + 34,
    flexDirection: "column",
    backgroundColor: COLORS.mainLightBackground,
  },
  header: {
    marginTop: 150,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 20,
  },
  loginForm: {
    position: "absolute",
    bottom: maxHeight / 2.5,
    width: maxWidth - 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  btnContainer: {
    position: "absolute",
    bottom: maxHeight / 3.5,
    width: maxWidth - 10,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  lineFooter: {
    position: "absolute",
    bottom: maxHeight / 4.5,
    width: maxWidth - 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: maxHeight / 8.5,
    left: "35%",
    width: maxWidth,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  btnSmallText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  navigatePage: {
    position: "absolute",
    bottom: maxHeight / 15,
    left: "20%",
    width: maxWidth,
    flexDirection: "row",
    marginHorizontal: 20,
  }
});

export default styles;
