import { Image, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { COLORS } from "../../constants";
import Button from "../../components/Button/Button";
const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");

  const navigator = useNavigation();

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Sign up</Text>
      </View>
      <View style={styles.loginForm}>
        <Input value={email} onChange={setEmail} placeholder={"Email"} />
        <Input value={phoneNumber} onChange={setPhoneNumber} placeholder={"Phone number"} />
        <Input
          value={password}
          onChange={setPassword}
          password
          placeholder={"Password"}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button>
          <Text style={styles.btnText}>Sign up</Text>
        </Button>
      </View>

      <View style={styles.lineFooter}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 110, textAlign: "center" }}>
            or Sign up with
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <View style={styles.footer}>
        <Button size={"small"}>
          <Text style={styles.btnSmallText}>G</Text>
        </Button>
      </View>
      <View style={styles.navigatePage}>
        <Text style={{  fontWeight: "bold" }}>
          Already have an account{" "}
          <Text
            style={{ color: COLORS.buttonBg }}
            onPress={() => navigator.navigate("Login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default SignupScreen;