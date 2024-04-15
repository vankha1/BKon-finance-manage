import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigator = useNavigation()
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigator.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={40}
          style={styles.backBtn}
        />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
export default Header;
