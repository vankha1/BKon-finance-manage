import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button/Button";
import styles from "./styles";
import { COLORS } from "../../constants";

const OnBoardingScreen3 = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/onboarding-1.jpg")}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          Phát triển
          {"\n"}tài chính để sinh con
        </Text>
        <Text style={styles.text}>
          Ứng dụng hỗ trợ các tính năng gợi ý chi tiêu để tiết kiệm thật tốt
          nguồn tiền và tiết kiệm tiền thì vợ vui
        </Text>
      </View>

      <Button onPress={() => navigator.navigate("Login")}>
        <Text style={styles.btnText}>Tiếp tục</Text>
      </Button>

      <View style={styles.dotNavigatorWrapper}>
        <Pressable
          style={styles.dotNavigator}
          onPress={() => navigator.navigate("Onboarding1")}
        >
          <Ionicons name="ellipse-outline" size={18} color={COLORS.buttonBg} />
        </Pressable>

        <Pressable
          style={styles.dotNavigator}
          onPress={() => navigator.navigate("Onboarding2")}
        >
          <Ionicons name="ellipse-outline" size={18} color={COLORS.buttonBg} />
        </Pressable>

        <Pressable
          style={styles.dotNavigator}
          onPress={() => navigator.navigate("Login")}
        >
          <Ionicons name="ellipse" size={18} color={COLORS.buttonBg} />
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoardingScreen3;
