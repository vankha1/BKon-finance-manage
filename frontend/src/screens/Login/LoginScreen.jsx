import { Image, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { COLORS } from "../../constants";
import Button from "../../components/Button/Button";
import axios from "axios";
import { Config } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/login";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggin, isValidAcc } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const navigator = useNavigation();

  const handleLogin = async () => {
    const response = await axios.post(`${Config.API_URL}/auth/login`, {
      email,
      password,
    });

    console.log(response.data);
    AsyncStorage.setItem("token", response.data?.access_token);
    AsyncStorage.setItem("userInfo", JSON.stringify(response.data?.user));

    dispatch(login({ isLoggin: true, isValidAcc: true}));

    navigator.navigate("MainStack");
  };

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Sign in</Text>
      </View>
      <View style={styles.loginForm}>
        <Input value={email} onChange={setEmail} placeholder={"Email"} />
        <Input
          value={password}
          onChange={setPassword}
          password
          placeholder={"Password"}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button onPress={handleLogin}>
          <Text style={styles.btnText}>Sign in</Text>
        </Button>
      </View>

      <View style={styles.lineFooter}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 110, textAlign: "center" }}>
            or Sign in with
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
        <Text style={{ fontWeight: "bold" }}>
          Don't have an account{" "}
          <Text
            style={{ color: COLORS.buttonBg }}
            onPress={() => navigator.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
