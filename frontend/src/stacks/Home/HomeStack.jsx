import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../../screens/Home/HomeScreen";
import TransactionScreen from "../../screens/Transaction/TransactionScreen";
import { View } from "react-native";
import StatItem from "../../components/StatItem/StatItem";

import { COLORS } from "../../constants";
import Finances from "../../screens/Home/FinanceResources/Finances";

const Stack = createStackNavigator();

export const CreateTransaction = () => {
    const navigator = useNavigation();
    return (
        <View
            style={{
                position: "absolute",
                bottom: 100,
                left: 20,
                width: "90%",
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                flexDirection: "row",
                flexWrap: "wrap",
                paddingRight: -10,
                gap: 15,
                padding: 20,
                borderRadius: 10,
            }}
        >
            <View
                style={{
                    position: "absolute",
                    bottom: -20,
                    left: -5,
                    width: "0%",
                    borderLeftWidth: 170,
                    borderLeftColor: "transparent",
                    borderRightWidth: 170,
                    borderRightColor: "transparent",
                    borderTopWidth: 20,
                    borderTopColor: "rgba(52, 52, 52, 0.8)",
                    backgroundColor: "transparent",
                }}
            />
            <StatItem
                iconName="wallet-outline"
                titleReport="Income"
                className={{
                    width: "45%",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                }}
                onPress={() => {
                    navigator.navigate("Transaction", {
                        type: "Income",
                    });
                }}
            />
            <StatItem
                iconName="bitcoin"
                titleReport="Expense"
                className={{
                    width: "45%",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                }}
            />
            <StatItem
                iconName="receipt"
                titleReport="Receivable"
                className={{
                    width: "45%",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                }}
            />
            <StatItem
                iconName="receipt"
                titleReport="Debt"
                className={{
                    width: "45%",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                }}
            />
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
        </Stack.Navigator>
    );
};
