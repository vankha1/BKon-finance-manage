import { View, Text } from "react-native";
import styles from "./styles";
import SettingCard from "@/components/SettingCard/SettingCard";
import { COLORS } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationKey, i18n } from "@/localization";
import { logout } from "@/redux/slice/login";

const SettingScreen = () => {
  const currencies = ["USD", "VND"];
  const languages = ["en-US", "vi-VN"];
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const [currency, setCurrency] = useState("USD");

  const localeState = useSelector((state) => state.locale);
  const optionsArray = [currencies, languages];
  const nameCard = [
    i18n.t(LocalizationKey.CURRENCY),
    i18n.t(LocalizationKey.LANGUAGE),
    i18n.t(LocalizationKey.NOTIFICATION),
    i18n.t(LocalizationKey.SECURITY),
    i18n.t(LocalizationKey.PRIVACY),
    i18n.t(LocalizationKey.LOGOUT),
  ];

  const iconTypes = [
    "dollar-sign",
    "globe",
    "bell",
    "shield",
    "database",
    "log-out",
  ];

  const handleLogout = () => {

    dispatch(logout())

    // navigator.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Change to into FlatList */}
      <View style={styles.cardContainer}>
        {nameCard.slice(0, 3).map((name, index) => {
          return (
            <SettingCard
              key={index}
              iconType={iconTypes[index]}
              bgColorIcon={COLORS.gray3}
              colorIcon={"black"}
              nameCard={name}
              // onSelect={
              //   index === 2 ? setLocale : index === 1 ? setCurrency : null
              // }
              data={optionsArray[index]}
            />
          );
        })}
      </View>

      <View style={styles.cardContainer}>
        {nameCard.slice(3, 5).map((name, index) => {
          return (
            <SettingCard
              key={index}
              iconType={iconTypes[index + 3]}
              bgColorIcon={COLORS.gray3}
              colorIcon={"black"}
              nameCard={name}
              data={optionsArray[index + 3]}
            />
          );
        })}
      </View>

      <View style={styles.cardContainer}>
        {nameCard.slice(5).map((name, index) => {
          return (
            <SettingCard
              key={index}
              iconType={iconTypes[index + 5]}
              bgColorIcon={COLORS.gray3}
              colorIcon={"black"}
              nameCard={name}
              onPress={handleLogout}
            />
          );
        })}
      </View>
    </View>
  );
};
export default SettingScreen;
