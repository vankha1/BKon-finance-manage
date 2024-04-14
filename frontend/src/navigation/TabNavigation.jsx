import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import SettingScreen from "../screens/Settings/SettingScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import { COLORS } from "../constants";
import { StatisStack } from "../stacks/Statistic/StatisticStack";
import {
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import StatItem from "../components/StatItem/StatItem";

const Tab = createBottomTabNavigator();

const CreateTransaction = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 90,
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
          left: 8,
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

function TabNavigator() {
  const [isShowPopover, setShowPopover] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowPopover(false), 2000);
  }, []);

  const CustomizeButton = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={{
          width: 65,
          height: 65,
          backgroundColor: COLORS.gray2,
          borderRadius: 35,
          backgroundColor: COLORS.buttonBg,
          marginVertical: "auto",
          justifyContent: "center",
          alignItems: "center",
          bottom: 20,
        }}
        onPress={onPress}
      >
        <MaterialCommunityIcons name="plus" color={"black"} size={40} />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.buttonBg,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Tab.Screen
        name="CreateButton"
        component={HomeScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            setShowPopover(!isShowPopover);
          },
        }}
        options={{
          title: "",
          headerShown: false,
          tabBarButton: () => {
            return (
              <>
                {isShowPopover && <CreateTransaction />}

                <CustomizeButton
                  onPress={() => setShowPopover(!isShowPopover)}
                />
              </>
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: "Account",
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Account",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerTitle: "Settings",
          headerStyle: { backgroundColor: COLORS.headerBg, height: 100 },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" color={color} size={size} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
