import { createStackNavigator } from "@react-navigation/stack";

import StatisticScreen from "@/screens/Statistic/StatisticScreen";
import ReceivableScreen from "@/screens/Statistic/Receivable/ReceivableScreen";
import IncomeAndExpenseScreen from "@/screens/Statistic/IncomeAndExpense/IncomeAndExpenseScreen";
import { COLORS } from "@/constants";
import { LocalizationKey, i18n } from "@/localization";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import IncomeStatScreen from "@/screens/Statistic/Income/IncomeStatScreen";

const Stack = createStackNavigator();
export const StatisStack = () => {
  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="StatisStack"
        component={StatisticScreen}
        options={{
          headerTitle: `${i18n.t(LocalizationKey.STATISTICS)}`,
          headerLeft: null,
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
        }}
      />
      <Stack.Screen
        name="Income"
        component={IncomeStatScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.INCOME_REPORT),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
      <Stack.Screen
        name="Expense"
        component={IncomeStatScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.EXPENSE_REPORT),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Stack.Screen
        name="Debt"
        component={ReceivableScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.DEBT_REPORT),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Stack.Screen
        name="Receivable"
        component={ReceivableScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.RECEIVABLE_REPORT),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Stack.Screen
        name="IncomeAndExpense"
        component={IncomeAndExpenseScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.INCOME_VS_EXPENSE),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Stack.Screen
        name="ReceivableAndDebt"
        component={IncomeAndExpenseScreen}
        options={{
          headerTitle: i18n.t(LocalizationKey.RECEIVABLE_VS_DEBT),
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Statistics",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
    </Stack.Navigator>
  );
};
