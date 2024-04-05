import { View, Text } from "react-native";
import styles from "./styles";
import SettingCard from "../../components/SettingCard/SettingCard";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const currencies = ['USD', 'VND'];
  const languages = ['English', 'Vietnamese'];
  const navigator = useNavigation();

  const optionsArray = [currencies, languages]
  const nameCard = [
    "Main currency",
    "Languages",
    "Notifications",
    "Security",
    "Personal data and privacy",
    "Log out",
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
    navigator.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.cardContainer}
      >
        {nameCard.slice(0,3).map((name, index) => {
          return (
            <SettingCard
              key={index}
              iconType={iconTypes[index]}
              bgColorIcon={COLORS.gray3}
              colorIcon={"black"}
              nameCard={name}
              data={optionsArray[index]}
            />
          );
        })}
      </View>

      <View
        style={styles.cardContainer}
      >
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

      <View
        style={styles.cardContainer}
      >
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
