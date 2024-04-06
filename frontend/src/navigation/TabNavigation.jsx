import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import SettingScreen from "../screens/Settings/SettingScreen";
import StatisticScreen from "../screens/Statistic/StatisticScreen";
import { COLORS } from "../constants";
import AccountScreen from "../screens/Account/AccountScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="home" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticScreen}
        options={{
          headerTitle: "Statistics",
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
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="account-outline" size={27} />;
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
          tabBarIcon: () => {
            return <Feather name="settings" size={23} />;
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
