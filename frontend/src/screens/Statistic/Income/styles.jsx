import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: COLORS.mainLightBackground,
  },
  barContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    margin: 10,
  },
  barChartBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: COLORS.gray3,
    borderRadius: 5,
    paddingVertical: 2
  },
  chartContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    margin: 10,
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  pieChartNotes: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  progressContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  progressBar: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
});

export default styles;
