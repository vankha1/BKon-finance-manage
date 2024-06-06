import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILIES, SIZES } from "../../constants";
const cardWidth = 309;
const cardHeight = 97;
const iconSideWidth = 60;
const border_card = 20;
const addWidgetHeight = 35;
const addWidgetWidth = 218;
const overHeader = 30;
const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.headerBg,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  upper_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    paddingTop: 17,
    paddingBottom: 10,
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: COLORS.white,
    width: 35,
    height: 35,
  },
  downer_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 45,
    paddingBottom: 40,
  },
  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 31,
  },
  BoundingHelloText: {
    flexDirection: "row",
    overFlowX: "hidden",
    width: "50%",
    height: 35,
  },
  containerScroll: {
    marginTop: -overHeader,
  },
  containerBackground: {
    marginTop: overHeader,
    backgroundColor: COLORS.mainLightBackground,
  },
  container_cards: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 250,
    //backgroundColor: COLORS.mainLightBackground,
    gap: 26,

    top: -overHeader,
    //zIndex: 1,

    // backgroundColor: COLORS.mainLightBackground,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderRadius: border_card,
    backgroundColor: "#fff",
    width: cardWidth,
    flexDirection: "row",
    //marginTop: -overHeader,
    height: cardHeight,
  },
  divideLine: {
    height: cardHeight,
    width: 2,
    backgroundColor: COLORS.primary,
  },
  cardWith2Elements: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    paddingLeft: 25,
    gap: 15,
    fontSize: SIZES.medium,
    zIndex: 1,
  },
  cardEleWithIcon_Left: {
    width: iconSideWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  cardEleWithIcon_Right: {
    width: cardWidth - iconSideWidth,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 0,
    paddingTop: 10,
  },
  belowBarProgress: {
    width: cardWidth - iconSideWidth,
    fontSize: SIZES.xSmall,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    paddingTop: 8,
    paddingRight: 29,
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
  addWidget: {
    borderRadius: border_card,
    backgroundColor: "#fff",
    width: addWidgetWidth,
    height: addWidgetHeight,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  subTitle: {
    marginTop: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 29,
  },
  noticeAndAvt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 13,
  },
  // text
  amountText: {
    color: COLORS.buttonBg,
    fontSize: SIZES.xMedium,
    fontFamily: FONTFAMILIES.semiBold,
  },
  subContentText: {
    fontSize: SIZES.small,
    fontFamily: FONTFAMILIES.medium,
  },
  contentText: {
    color: COLORS.gray4,
    fontSize: SIZES.xxSmall,
    fontFamily: FONTFAMILIES.medium,
  },
  cashText: {
    color: COLORS.gray4,
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.xMedium,
  },
  headingAmountText: {
    fontFamily: FONTFAMILIES.bold,
    fontSize: SIZES.xMedium,
    color: "white",
  },
  balanceHeadingText: {
    color: COLORS.white,
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.medium,
  },
  helloText: {
    color: COLORS.white,
    fontFamily: FONTFAMILIES.medium,
    fontSize: SIZES.xLarge,
  },
  widgetText: {
    paddingLeft: 10,
    fontSize: SIZES.tiny,
    fontFamily: FONTFAMILIES.medium,
  },
});

export default styles;
