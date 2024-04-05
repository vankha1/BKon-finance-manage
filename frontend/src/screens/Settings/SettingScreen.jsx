import { View, Text } from "react-native";
import styles from "./styles";
import SettingCard from "../../components/SettingCard/SettingCard";
import { COLORS } from "../../constants";

const SettingScreen = () => {
  const nameCard = [
    "Main Currency",
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
            />
          );
        })}
      </View>

      <View
        style={styles.cardContainer}
      >
        {nameCard.slice(3, 5).map((name, index) => {
          console.log(index)
          return (
            <SettingCard
              key={index}
              iconType={iconTypes[index + 3]}
              bgColorIcon={COLORS.gray3}
              colorIcon={"black"}
              nameCard={name}
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
            />
          );
        })}
      </View>

      
    </View>
  );
};
export default SettingScreen;
