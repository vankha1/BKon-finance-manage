import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  chartContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
    margin: 10,
  },
  progressContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  progressBar: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10
  }
});

export default styles;
