import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import AccountCard from "../../components/AccountCard/AccountCard";
import { LocalizationKey, i18n } from "../../localization";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AccountScreen = () => {
  const localeState = useSelector(state => state.locale)

  useEffect(() => {
    i18n.locale = localeState.locale
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/profile.png")}
          style={styles.img}
        />
        <Text style={[styles.username]}>Van Kha</Text>
      </View>

      <View style={styles.cardList}>
        <AccountCard
          iconName="monitor-screenshot"
          infoTitle={i18n.t(LocalizationKey.FULLNAME)}
          infoText="Van Kha"
        />
        <AccountCard
          iconName="account"
          infoTitle="Email"
          infoText="vovankha2003@gmail.com"
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
