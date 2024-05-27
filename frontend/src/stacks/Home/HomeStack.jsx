import { View, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import HomeScreen from "../../screens/Home/HomeScreen";
import TransactionScreen from "../../screens/Transaction/TransactionScreen";
import StatItem from "../../components/StatItem/StatItem";
import Finances from "../../screens/Home/FinanceResources/Finances";
import CurrentCash from "../../screens/Home/FinanceResources/FinancesInfo/CurrentCash/CurrentCash";
import CurrentBankAccount from "../../screens/Home/FinanceResources/FinancesInfo/CurrentBankAccount/CurrentBankAccount";
import CurrentEWallet from "../../screens/Home/FinanceResources/FinancesInfo/CurrentEwallet/CurrentEWallet";
import ListDORScreen from "../../screens/ListDOR/ListDORScreen";
import styles from "./styles";

const Stack = createStackNavigator();

export const getType = (name) => {
  if (name === "Debt") return "debts";
  if (name === "Receivable") return "receivables";
  if (name === "Income") return "incomes";
  return "expenses";
};

export const CreateTransaction = ({ onShow }) => {
  const navigator = useNavigation();

  const data = [
    {
      name: "Expense",
      comp: "Transaction",
      icon: "bitcoin",
      iconLib: MaterialCommunityIcons,
    },
    {
      name: "Receivable",
      comp: "ListDOR",
      icon: "diff-added",
      iconLib: Octicons,
    },
    {
      name: "Debt",
      comp: "ListDOR",
      icon: "minussquareo",
      iconLib: AntDesign,
    },
    {
      name: "Income",
      comp: "Transaction",
      icon: "wallet-outline",
      iconLib: MaterialCommunityIcons,
    },
  ];

  return (
    <View style={styles.transactionContainer}>
      <Pressable style={styles.plusButton} onPress={onShow}>
        <View style={styles.optionTransaction}>
          <View style={styles.arrowDown} />
          <View style={styles.optionsWrapper}>
            {data.map((item, index) => {
              return (
                <StatItem
                  LibIcon={item.iconLib}
                  iconName={item.icon}
                  titleReport={item.name}
                  className={{
                    width: "45%",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    borderRadius: 16,
                    marginBottom: 6,
                  }}
                  onPress={() => {
                    navigator.navigate(item.comp, {
                      type: getType(item.name),
                    });
                    onShow();
                  }}
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Finances" component={Finances} />
      <Stack.Screen name="CurrentCash" component={CurrentCash} />
      <Stack.Screen name="CurrentBankAccount" component={CurrentBankAccount} />
      <Stack.Screen name="CurrentEWallet" component={CurrentEWallet} />
      <Stack.Screen name="ListDOR" component={ListDORScreen} />
    </Stack.Navigator>
  );
};
