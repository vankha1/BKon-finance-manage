import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import SettingScreen from "../screens/Settings/SettingScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import { COLORS, FONTFAMILIES } from "../constants";
import { StatisStack } from "../stacks/Statistic/StatisticStack";
import { TouchableOpacity, Modal } from "react-native";
import { useEffect, useState, Pressable } from "react";
import { CreateTransaction, HomeStack } from "../stacks/Home/HomeStack";
import { LocalizationKey, i18n } from "../localization";
import { useDispatch, useSelector } from "react-redux";
import analytics from "@react-native-firebase/analytics";
import { toggleEvent } from "@/redux/slice/transactions";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const [isShowPopover, setShowPopover] = useState(false);
  const localeState = useSelector((state) => state.locale);
  const { isChanged } = useSelector((state) => state.transaction)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => setShowPopover(false), 5);
    i18n.locale = localeState.locale;
  }, []);

  const CustomizeButton = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={{
          width: 56,
          height: 56,
          backgroundColor: COLORS.gray2,
          borderRadius: 35,
          backgroundColor: COLORS.buttonBg,
          marginVertical: "auto",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
        }}
        onPress={onPress}
      >
        <MaterialCommunityIcons name="plus" color={"white"} size={26} />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarActiveTintColor: COLORS.buttonBg,
        tabBarInactiveTintColor: COLORS.black,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        listeners={{
          tabPress: () => {
            //e.preventDefault();
            setShowPopover(false);
            // console.log(isShowPopover);
          },
        }}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONTFAMILIES.regular,
            marginTop: -10,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisStack}
        listeners={{
          tabPress: async () => {
            //e.preventDefault();
            // await analytics().logEvent('statistic_usage');
            console.log(11111)
            dispatch(toggleEvent({ value: !isChanged }))
            setShowPopover(false);
            // console.log(isShowPopover);
          },
        }}
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
            fontSize: 12,
            fontFamily: FONTFAMILIES.regular,
            marginTop: -10,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            setShowPopover(false);
            // console.log(isShowPopover);
          },
        }}
        options={{
          title: "",
          headerShown: false,
          tabBarButton: () => {
            return (
              <>
                {isShowPopover && (
                  <CreateTransaction onShow={() => setShowPopover(false)} />
                )}

                <CustomizeButton
                  onPress={() => {
                    setShowPopover(!isShowPopover);
                    //console.log(isShowPopover);
                  }}
                />
              </>
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONTFAMILIES.regular,
            marginTop: -10,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        listeners={{
          tabPress: () => {
            //e.preventDefault();
            setShowPopover(false);
            //console.log(isShowPopover);
          },
        }}
        options={{
          headerTitle: `${i18n.t(LocalizationKey.ACCOUNTS)}`,
          headerStyle: {
            backgroundColor: COLORS.headerBg,
            height: 100,
          },
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
            fontSize: 12,
            fontFamily: FONTFAMILIES.regular,
            marginTop: -10,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        listeners={{
          tabPress: () => {
            //e.preventDefault();
            setShowPopover(false);
            //console.log(isShowPopover);
          },
        }}
        options={{
          headerTitle: `${i18n.t(LocalizationKey.SETTINGS)}`,
          headerStyle: {
            backgroundColor: COLORS.headerBg,
            height: 100,
          },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerTitleAlign: "center",
          title: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" color={color} size={size} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONTFAMILIES.regular,
            marginTop: -10,
          },
          tabBarActiveBackgroundColor: "primary",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
