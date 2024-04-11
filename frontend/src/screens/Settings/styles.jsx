import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: COLORS.mainLightBackground,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    marginBottom: 20,
    borderRadius: 10
  },
});

export default styles;
