import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES } from "@/constants";
const CardWidth = 337;
const CardHeight = 185;
const RowPadding = 36;
const ColPadding = 21;
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.black,
  },
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: CardWidth,
    height: CardHeight,
    backgroundColor: COLORS.lightWhite,
    marginVertical: 10,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomColor: COLORS.black,
    borderBottomWidth: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
  },
  content: {
    backgroundColor: COLORS.mainLightBackground,
    flex: 1,
    paddingTop: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingLeft: 32,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  progressBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingRight: RowPadding,
  },
  headerText: {
    fontFamily: FONTFAMILIES.regular,
    fontSize: 16,
  },
  contentText: {
    fontFamily: FONTFAMILIES.regular,
    fontSize: 14,
  },
});
export default styles;
