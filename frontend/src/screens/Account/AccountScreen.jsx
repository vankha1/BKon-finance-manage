import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import AccountCard from "../../components/AccountCard/AccountCard";

const AccountScreen = () => {
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
          infoTitle="Fullname"
          infoText="Van Kha"
        />
        <AccountCard
          iconName="account"
          infoTitle="Email"
          infoText="vovankha2003@gmail.com"
        />
        <AccountCard
          iconName="lock-outline"
          infoTitle="Password"
          infoText=".............."
        />
        <AccountCard
          iconName="bank-outline"
          infoTitle="Bank account"
          data={["BIDV", "Mono Bank"]}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};
export default AccountScreen;
