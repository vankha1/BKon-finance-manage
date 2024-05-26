import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
const border_card = 20;
const item_width = 329;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: 22,
    backgroundColor: COLORS.mainLightBackground,
  },
  financeContainer: {
    marginTop: 33,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    width: item_width,
    borderRadius: 20,
    backgroundColor: "white",
  },
  addWidget: {
    borderRadius: border_card,
    backgroundColor: "#fff",
    width: item_width,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 26,
    backgroundColor: "gray",
    width: "100%",
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    fontSize: SIZES.medium,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: 450,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});
export default styles;
