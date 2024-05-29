import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const maxHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: COLORS.mainLightBackground,
    height: maxHeight,
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
  pieChartNotesWrapper: {
    flexDirection: "column",
    alignItems: "start",
    marginLeft: 10,
  },
  pieChartNotes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default styles;
