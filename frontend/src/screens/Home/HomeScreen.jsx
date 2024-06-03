import {
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
  FontAwesome6,
} from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { COLORS, SIZES } from "@/constants";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { LocalizationKey, i18n } from "@/localization";
import IconWrapper from "@/components/Icon/Icon";
import { getResources, getTransactions } from "@/services";
import { getIncomeMonthly } from "@/services/income";
import { getReceivables } from "@/services/receivable";
import {
  checkProgressValue,
  convertNumber,
  getFirstDateOfMonth,
  getLatestValue,
  getReceivableValue,
} from "@/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "date-fns";

const HomeScreen = () => {
  const [financeResources, setFinanceResource] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [receivables, setReceivables] = useState([]);
  const [debts, setDebts] = useState([]);
  const [name, setName] = useState("");
  const { isChanged } = useSelector((state) => state.transaction);
  const [isLoading, setIsLoading] = useState(false);
  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const [resources, monthlyIncomes, receivables, debts, user] =
        await Promise.all([
          getResources(),
          getIncomeMonthly(new Date(), getFirstDateOfMonth()),
          getTransactions("receivables"),
          getTransactions("debts"),
          AsyncStorage.getItem("userInfo"),
        ]);

      setIsLoading(false);
      setFinanceResource(resources);

      setIncomes(monthlyIncomes);

      setReceivables(receivables);

      setDebts(debts);

      setName(JSON.parse(user).username);
    };

    getData();
  }, [isChanged]);

  const latestReceivable = getLatestValue("Receivable", receivables);
  const latestDebt = getLatestValue("Debt", debts);
  const monthlyIncome = useMemo(
    () => incomes.reduce((acc, ele) => acc + ele.amount, 0),
    [incomes]
  );
  const currentBalance = useMemo(
    () => financeResources.reduce((acc, ele) => acc + ele.balance, 0),
    [financeResources]
  );
  const currentCash = useMemo(
    () =>
      financeResources
        .filter((finance) => finance.name === "Cash")
        .reduce((acc, ele) => acc + ele.balance, 0),
    [financeResources]
  );
  const currentBankAccount = useMemo(
    () =>
      financeResources
        .filter((finance) => finance.name === "Bank account")
        .reduce((acc, ele) => acc + ele.balance, 0),
    [financeResources]
  );

  const navigator = useNavigation();
  const handleFinances = () => {
    navigator.navigate("Finances");
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.upper_header}>
          <View style={styles.BoundingHelloText}>
            <Text style={styles.helloText}>
              {i18n.t(LocalizationKey.HI)}, {name}
            </Text>
          </View>
          <View style={styles.noticeAndAvt}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={SIZES.xLarge}
              color={COLORS.white}
            />
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.avatar}
            />
          </View>
        </View>
        <View style={styles.downer_header}>
          <View style={styles.balance}>
            <Text style={styles.balanceHeadingText}>
              {i18n.t(LocalizationKey.YOUR_BALANCE)}
            </Text>
            <Text style={styles.headingAmountText}>
              {convertNumber(currentBalance)}
            </Text>
          </View>
          <Pressable onPress={handleFinances}>
            <FontAwesome6
              name="pen-to-square"
              size={SIZES.xLarge}
              color={COLORS.white}
            />
          </Pressable>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerBackground}>
            <View style={styles.container_cards}>
              <View style={styles.card}>
                <View style={styles.cardWith2Elements}>
                  <Text style={styles.cashText}>
                    {i18n.t(LocalizationKey.CASH)}
                  </Text>
                  <Text style={styles.amountText}>
                    {" "}
                    {currentCash >= 0
                      ? `${convertNumber(currentCash)}`
                      : i18n.t(LocalizationKey.NOT_AVAILABLE)}
                  </Text>
                </View>

                <View
                  style={{ height: 100, width: 2, backgroundColor: "#00FF00" }}
                />

                <View style={styles.cardWith2Elements}>
                  <Text style={[styles.cashText]}>
                    {i18n.t(LocalizationKey.BANK_CARD)}
                  </Text>
                  <Text
                    style={[
                      !(currentBalance >= 0) && {
                        paddingLeft: 30,
                        fontSize: 16,
                      },
                      styles.amountText,
                    ]}
                  >
                    {currentBankAccount >= 0
                      ? `${convertNumber(currentBankAccount)}`
                      : i18n.t(LocalizationKey.NOT_AVAILABLE)}
                  </Text>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardEleWithIcon_Left}>
                  <IconWrapper
                    iconType={"creditcard"}
                    size={SIZES.xLarge}
                    colorIcon={"#000"}
                    LibIcon={AntDesign}
                    haveBorder={true}
                    borderSize={"large"}
                  />
                </View>
                <View
                  style={[
                    styles.cardEleWithIcon_Right,
                    { alignSelf: "center" },
                  ]}
                >
                  <Text style={styles.contentText}>
                    {i18n.t(LocalizationKey.MONTHLY_INCOME)}
                  </Text>
                  <Text style={styles.amountText}>
                    {convertNumber(monthlyIncome)}
                  </Text>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardEleWithIcon_Left}>
                  <IconWrapper
                    iconType={"diff-added"}
                    size={SIZES.xLarge}
                    colorIcon={"#000"}
                    LibIcon={Octicons}
                    haveBorder={true}
                    borderSize={"large"}
                  />
                </View>
                <View style={styles.cardEleWithIcon_Right}>
                  <Text style={styles.contentText}>
                    {i18n.t(LocalizationKey.RECEIVABLE)}
                  </Text>
                  <Text style={styles.amountText}>
                    {convertNumber(latestReceivable.amount) || 0}
                  </Text>
                  <Progress.Bar
                    progress={checkProgressValue(
                      latestReceivable.finishing,
                      latestReceivable.amount
                    )}
                    width={220}
                    height={4}
                    borderWidth={0}
                    unfilledColor={COLORS.gray3}
                    color={COLORS.buttonBg}
                  />
                  <View style={styles.subTitle}>
                    <Text style={styles.subContentText}>
                      {convertNumber(latestReceivable.finishing) || 0}/
                      {convertNumber(latestReceivable.amount) || 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardEleWithIcon_Left}>
                  <IconWrapper
                    iconType={"diff-removed"}
                    size={SIZES.xLarge}
                    colorIcon={"#000"}
                    LibIcon={Octicons}
                    haveBorder={true}
                    borderSize={"large"}
                  />
                </View>
                <View style={styles.cardEleWithIcon_Right}>
                  <Text style={styles.contentText}>
                    {i18n.t(LocalizationKey.DEBT)}
                  </Text>
                  <Text style={styles.amountText}>
                    {convertNumber(latestDebt.amount) || 0}
                  </Text>
                  <Progress.Bar
                    progress={checkProgressValue(
                      latestDebt.finishing,
                      latestDebt.amount
                    )}
                    width={220}
                    height={4}
                    borderWidth={0}
                    unfilledColor={COLORS.gray3}
                    color={COLORS.buttonBg}
                  />
                  <View style={styles.subTitle}>
                    <Text style={styles.subContentText}>
                      {convertNumber(latestDebt.finishing) || 0}/
                      {convertNumber(latestDebt.amount) || 0}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default HomeScreen;
