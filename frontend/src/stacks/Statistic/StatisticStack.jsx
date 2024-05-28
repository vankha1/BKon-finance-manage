import { createStackNavigator } from "@react-navigation/stack";

import StatisticScreen from "@/screens/Statistic/StatisticScreen";
import ExpenseStatScreen from "@/screens/Statistic/Expense/ExpenseStatScreen";
import ReceivableScreen from "@/screens/Statistic/Receivable/ReceivableScreen";
import IncomeAndExpenseScreen from "@/screens/Statistic/IncomeAndExpense/IncomeAndExpenseScreen";
import { COLORS } from "@/constants";
import { LocalizationKey, i18n } from "@/localization";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import IncomeStatScreen from "@/screens/Statistic/Income/IncomeStatScreen";
import DebtScreen from "@/screens/Statistic/Debt/DebtStatScreen";

const Stack = createStackNavigator();
export const StatisStack = () => {
  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, [])

  return (
    <Stack.Navigator
        screenOptions={{
        }}
    >
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
          headerTitle: "Income Report",
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
        component={ExpenseStatScreen}
        options={{
          headerTitle: "Expense Report",
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
        component={DebtScreen}
        options={{
          headerTitle: "Debt Report",
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
          headerTitle: "Receivable Report",
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
          headerTitle: "Income vs Expense Report",
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
          headerTitle: "Receivable vs Debt Report",
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
