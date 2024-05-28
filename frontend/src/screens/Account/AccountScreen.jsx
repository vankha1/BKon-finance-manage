import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import AccountCard from "@/components/AccountCard/AccountCard";
import { LocalizationKey, i18n } from "@/localization";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = () => {
  const localeState = useSelector((state) => state.locale);
  const [user, setUser] = useState({})

  useEffect(() => {
    i18n.locale = localeState.locale;

    AsyncStorage.getItem("userInfo")
      .then((result) => {
        setUser(JSON.parse(result))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/profile.png")}
          style={styles.img}
        />
        <Text style={[styles.username]}>{user?.username}</Text>
      </View>

      <View style={styles.cardList}>
        <AccountCard
          iconName="monitor-screenshot"
          infoTitle={i18n.t(LocalizationKey.FULLNAME)}
          infoText={user?.fullname}
        />
        <AccountCard
          iconName="account"
          infoTitle="Email"
          infoText={user?.email}
        />
        <AccountCard
          iconName="lock-outline"
          infoTitle={i18n.t(LocalizationKey.PASSWORD)}
          infoText=".............."
        />
        <AccountCard
          iconName="bank-outline"
          infoTitle={i18n.t(LocalizationKey.BANKACCOUNT)}
          data={["BIDV", "Mono Bank"]}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};
export default AccountScreen;
