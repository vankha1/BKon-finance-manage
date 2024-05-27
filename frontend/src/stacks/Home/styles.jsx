import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  transactionContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    // backgroundColor: COLORS.black,
  },
  plusButton: {
    backgroundColor: "transparent",
    //width: "100%",
    height: "730%",
    bottom: 0,
    top: -433,
    left: 0,
    right: 0,
  },
  optionTransaction: {
    position: "absolute",
    bottom: 50,
    left: 15,
    right: 15,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 15,
    padding: 13,
    borderRadius: 10,
  },
  arrowDown: {
    position: "absolute",
    bottom: -34,
    left: 9,
    //right: -8,
    borderLeftWidth: 156,
    borderLeftColor: "transparent",
    borderRightWidth: 156,
    borderRightColor: "transparent",
    borderTopWidth: 34,
    borderTopColor: "rgba(52, 52, 52, 0.8)",
    backgroundColor: "transparent",
  },
  optionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap"
  }
});

export default styles;
