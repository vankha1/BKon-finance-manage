import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const cardWidth = "90%";
const iconSideWidth = 30;

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.mainLightBackground },
  
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    height: "100%",
    gap: 20
  },
  card: {
    backgroundColor: "#fff",
    width: cardWidth,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    height: 60,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.buttonBg,
  },
  cardEleWithIcon_Left: {
    width: iconSideWidth,
    alignItems: "center",
    marginLeft: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateTitle: {
    fontSize: 16,
    color: COLORS.buttonBg,
  },
  textAreaContainer: {
    borderColor: COLORS.gray2,
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
});

export default styles;
