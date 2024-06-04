import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES } from "../../../constants";

const maxHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: COLORS.mainLightBackground,
    height: maxHeight,
    width: "100%",
    paddingBottom: 300,
  },
  chartContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
    gap: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  topReceives: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
  peopleName: {
    width: "20%",
    height: 20,
    overflowX: "hidden",
  },

  topReceivesItem: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  titleTopReceives: { fontFamily: FONTFAMILIES.bold },
  moreBtn: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default styles;
