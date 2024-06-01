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
} from "react-native";
import styles from "./styles";
import { COLORS, SIZES } from "@/constants";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { LocalizationKey, i18n } from "@/localization";
import IconWrapper from "@/components/Icon/Icon";
import { getResources } from "@/services";
import { getIncomeMonthly } from "@/services/income";
import { getReceivables } from "@/services/receivable";
import { getFirstDateOfMonth, getReceivableValue } from "@/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [financeResources, setFinanceResource] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [receivables, setReceivables] = useState([]);
  const [name, setName] = useState("");
  const localeState = useSelector((state) => state.locale);
  const { isChanged } = useSelector((state) => state.transaction);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);

  useEffect(() => {
    const getData = async () => {
      const [resources, monthlyIncomes, receivables, user] = await Promise.all([
        getResources(),
        getIncomeMonthly(new Date(), getFirstDateOfMonth()),
        getReceivables(),
        AsyncStorage.getItem("userInfo"),
      ]);

      setFinanceResource(resources);

      setIncomes(monthlyIncomes);

      setReceivables(receivables);

      setName(JSON.parse(user).username);
    };
    getData();
  }, [isChanged]);

  const latestReceivable = getReceivableValue(receivables);
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
          <Text style={styles.helloText}>
            {i18n.t(LocalizationKey.HI)}, {name}
          </Text>
          <View style={styles.noticeAndAvt}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={SIZES.xLarge}
              color={COLORS.white}
            />
            <View style={styles.avatar}></View>
          </View>
        </View>
        <View style={styles.downer_header}>
          <View style={styles.balance}>
            <Text style={styles.balanceHeadingText}>
              {i18n.t(LocalizationKey.YOUR_BALANCE)}
            </Text>
            <Text style={styles.headingAmountText}>{currentBalance}</Text>
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
                  {currentCash > 0
                    ? `${currentCash}`
                    : i18n.t(LocalizationKey.NOT_AVAILABLE)}
                </Text>
              </View>
              <View style={styles.cardWith2Elements}>
                <Text
                  style={[
                    {
                      paddingLeft: 30,
                    },
                    styles.contentText,
                  ]}
                >
                  {i18n.t(LocalizationKey.BANK_CARD)}
                </Text>
                <Text
                  style={[
                    {
                      paddingLeft: 30,
                      paddingTop: 10,
                    },
                    styles.subContentText,
                  ]}
                >
                  {currentBankAccount > 0
                    ? `${currentBankAccount}`
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
              <View style={styles.cardEleWithIcon_Right}>
                <Text style={styles.contentText}>
                  {i18n.t(LocalizationKey.MONTHLY_INCOME)}
                </Text>
                <Text style={styles.amountText}>{monthlyIncome}</Text>
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
                <Text style={styles.amountText}>{latestReceivable.amount}</Text>
                <Progress.Bar
                  progress={
                    latestReceivable.amount > 0
                      ? latestReceivable.received / latestReceivable.amount
                      : 0
                  }
                  width={220}
                  height={4}
                  borderWidth={0}
                  unfilledColor={COLORS.gray3}
                  color={COLORS.buttonBg}
                />
                <View style={styles.subTitle}>
                  <Text style={styles.subContentText}>
                    {latestReceivable.received}/{latestReceivable.amount}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
