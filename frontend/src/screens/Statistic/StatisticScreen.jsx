import { Pressable, Text, View } from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import analytics from "@react-native-firebase/analytics";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import StatItem from "@/components/StatItem/StatItem";
import { LocalizationKey, i18n } from "@/localization";
import { getReportByCategory } from "@/services";

const StatisticScreen = () => {
  const navigator = useNavigation();

  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);

  const getCategories = async (type) => {
    const res = await getReportByCategory(type);
    // console.log(res.map((item) => item.totalAmount));
    return {
      series: res.map((item) => item.totalAmount),
      categories: res.map((item) => item.spendOn)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pressableList}>
        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="wallet-outline"
          titleReport={i18n.t(LocalizationKey.INCOME_REPORT)}
          onPress={async () => {
            const { series, categories } = await getCategories("incomes");

            navigator.navigate("Income", {
              type: "incomes",
              series,
              categories,
            });
            // await analytics().logEvent("statistic_usage", { type: "income" });
          }}
          className={styles.btn}
        />
        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="bitcoin"
          titleReport={i18n.t(LocalizationKey.EXPENSE_REPORT)}
          onPress={async () => {
            const { series, categories } = await getCategories("expenses");

            navigator.navigate("Expense", {
              type: "expenses",
              series,
              categories,
            });

            // await analytics().logEvent("statistic_usage", { type: "expense" });
          }}
          className={styles.btn}
        />

        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="receipt"
          titleReport={i18n.t(LocalizationKey.DEBT_REPORT)}
          onPress={async () => {
            navigator.navigate("Debt", {
              type: "debts",
              name: "Debt"
            });
            // await analytics().logEvent("statistic_usage", { type: "debt" });
          }}
          className={styles.btn}
        />

        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="receipt"
          titleReport={i18n.t(LocalizationKey.RECEIVABLE_REPORT)}
          onPress={async () => {
            navigator.navigate("Receivable", {
              type: "receivables",
              name: "Receivable"
            });
            // await analytics().logEvent("statistic_usage", { type: "receivable" });
          }}
          className={styles.btn}
        />

        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="chart-line"
          titleReport={i18n.t(LocalizationKey.INCOME_VS_EXPENSE)}
          onPress={async () => {
            navigator.navigate("IncomeAndExpense", {
              type: ["incomes", "expenses"],
              name: "Income vs Expense"
            });
            // await analytics().logEvent("statistic_usage", {
            //   type: "incomeAndExpense",
            // });
          }}
          className={styles.btn}
        />

        <StatItem
          LibIcon={MaterialCommunityIcons}
          iconName="chart-line"
          titleReport={i18n.t(LocalizationKey.RECEIVABLE_VS_DEBT)}
          onPress={async () => {
            navigator.navigate("ReceivableAndDebt", {
              type: ["receivables", "debts"],
              name: "Receivable vs Debt"
            });
            // await analytics().logEvent("statistic_usage", {
            //   type: "ReceivableAndDebt",
            // });
          }}
          className={styles.btn}
        />
      </View>
    </View>
  );
};
export default StatisticScreen;
