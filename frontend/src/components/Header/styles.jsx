import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    backgroundColor: COLORS.headerBg,
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    color: "white",
    marginLeft: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginLeft: -20,
  },
});

export default styles;
