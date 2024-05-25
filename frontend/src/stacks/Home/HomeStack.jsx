import { View, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../../screens/Home/HomeScreen";
import TransactionScreen from "../../screens/Transaction/TransactionScreen";
import StatItem from "../../components/StatItem/StatItem";
import Finances from "../../screens/Home/FinanceResources/Finances";
import CurrentCash from "../../screens/Home/FinanceResources/FinancesInfo/CurrentCash/CurrentCash";
import CurrentBankAccount from "../../screens/Home/FinanceResources/FinancesInfo/CurrentBankAccount/CurrentBankAccount";
import CurrentEWallet from "../../screens/Home/FinanceResources/FinancesInfo/CurrentEwallet/CurrentEWallet";
import {
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

export const CreateTransaction = ({ onShow }) => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        // backgroundColor: COLORS.black,
      }}
    >
      <Pressable
        style={{
          backgroundColor: "transparent",
          //width: "100%",
          height: "730%",
          bottom: 0,
          top: -433,
          left: 0,
          right: 0,
        }}
        onPress={onShow}
      >
        <View
          style={{
            position: "absolute",
            //width: "100%",
            bottom: 50,

            left: 15,
            right: 15,
            //width: "90%",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            flexDirection: "column",
            //flexWrap: "wrap",
            justifyContent: "flex-start",
            //paddingRight: -10,
            gap: 15,
            //height: 132,
            padding: 13,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: -34,
              left: 9,
              //right: -8,
              borderLeftWidth: 156,
              borderLeftColor: "transparent",
              borderRightWidth: 156,
              borderRightColor: "transparent",
              borderTopWidth: 34,
              borderTopColor: "rgba(52, 52, 52, 0.8)",
              backgroundColor: "transparent",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StatItem
              LibIcon={MaterialCommunityIcons}
              iconName={"bitcoin"}
              titleReport={"Expense"}
              className={{
                width: "45%",
                backgroundColor: "white",
                paddingVertical: 10,
                //paddingHorizontal: 5,
                borderRadius: 16,
              }}
              onPress={() => {
                onShow();
              }}
            />
            <StatItem
              LibIcon={Octicons}
              iconName={"diff-added"}
              titleReport={"Receivable"}
              className={{
                width: "45%",
                backgroundColor: "white",
                paddingVertical: 10,
                //paddingHorizontal: 5,
                borderRadius: 16,
              }}
              onPress={() => {
                onShow();
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StatItem
              LibIcon={AntDesign}
              iconName={"minussquareo"}
              titleReport={"Debt"}
              className={{
                width: "45%",
                backgroundColor: "white",
                paddingVertical: 10,
                //paddingHorizontal: 5,
                borderRadius: 16,
              }}
              onPress={() => {
                onShow();
              }}
            />
            <StatItem
              LibIcon={MaterialCommunityIcons}
              iconName={"wallet-outline"}
              titleReport="Income"
              className={{
                width: "45%",
                backgroundColor: "white",
                paddingVertical: 10,
                //paddingHorizontal: 5,
                borderRadius: 16,
              }}
              onPress={() => {
                navigator.navigate("Transaction", {
                  type: "Income",
                });
                onShow();
              }}
            />
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
      <Stack.Screen
        name="CurrentBankAccount"
        component={CurrentBankAccount}
      ></Stack.Screen>
      <Stack.Screen name="CurrentEWallet" component={CurrentEWallet} />
    </Stack.Navigator>
  );
};
