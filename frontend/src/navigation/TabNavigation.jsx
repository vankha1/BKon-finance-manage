import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import SettingScreen from "../screens/Settings/SettingScreen";

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
        name="Settings"
        component={SettingScreen}
        options={{
          title: "Home",
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
