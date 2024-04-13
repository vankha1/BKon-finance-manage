import { createStackNavigator } from "@react-navigation/stack";

import StatisticScreen from "../../screens/Statistic/StatisticScreen";
import ExpenseStatScreen from "../../screens/Statistic/Expense/ExpenseStatScreen";
import ReceivableScreen from "../../screens/Statistic/Receivable/ReceivableScreen";
import IncomeAndExpenseScreen from "../../screens/Statistic/IncomeAndExpense/IncomeAndExpenseScreen";
import { COLORS } from "../../constants";

const Stack = createStackNavigator();
export const StatisStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        }}
    >
      <Stack.Screen
        name="StatisStack"
        component={StatisticScreen}
        options={{
          headerTitle: "Statistics",
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
    </Stack.Navigator>
  );
};
