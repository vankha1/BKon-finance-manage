import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
  },
  selectInput: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    gap: 10,
  },
  typeName: {
    fontSize: 16,
  },
  progressContent: {
    flex: 1,
    flexDirection: "row",
  },
});

export default styles;
