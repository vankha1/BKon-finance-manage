import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";

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
    gap: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: cardWidth,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    height: 60,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
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
  amountText: {
    marginBottom: 10,
    fontSize: 16,
  },
  inputAmountWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  inputAmount: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  cardEleWithIcon_Left: {
    width: iconSideWidth,
    alignItems: "center",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // dateTitle: {
  //   fontFamily: FONTFAMILIES.medium,
  //   fontSize: SIZES.xSmall,
  //   color: COLORS.buttonBg,
  // },
  buttonContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    gap: 10,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: FONTFAMILIES.bold,
  },
  option: {
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.xSmall,
    padding: 10,
    color: COLORS.gray2,
  },
  dateTitle: {
    fontSize: 16,
    color: COLORS.buttonBg,
  },
  DORinputWrapper: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },
  DORicon: {
    borderWidth: 1,
    borderColor: COLORS.buttonBg,
    borderRadius: 30,
    width: 45,
    height: 45,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  DORinput: {
    //width: Dimensions.get("window").width * 0.9,
    fontFamily: FONTFAMILIES.medium,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    textAlignVertical: "top",
    backgroundColor: "white",
    fontSize: SIZES.xxSmall,
    color: COLORS.black,
    flex: 1,
  },
  textAreaContainer: {
    borderColor: COLORS.gray2,
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    fontFamily: FONTFAMILIES.regular,
    height: 150,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width * 0.9,
    padding: 20,
    borderRadius: 10,
    textAlignVertical: "top",
    backgroundColor: COLORS.gray,
    fontSize: 16,
  },

  // common styles
  center: {
    alignItems: "center",
  },
  underLine: {
    width: 140,
    borderWidth: 2,
    borderColor: COLORS.buttonBg,
    backgroundColor: COLORS.buttonBg,
  },
  optionSelectWrapper: {
    marginTop: 10,
    backgroundColor: COLORS.gray3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray3,
    overflow: "scroll",
  },
  selectedOption: {
    backgroundColor: COLORS.mainLightBackground,
  },
  unSelectedOption: {
    backgroundColor: COLORS.gray,
  },
  firstOptionSelect: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastOptionSelect: {
    marginBottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentText: {
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.medium,
  },
  smallText: {
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.xSmall,
  },
});

export default styles;
