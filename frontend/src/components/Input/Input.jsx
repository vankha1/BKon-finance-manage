import { Pressable, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import styles from "./styles";
const Input = ({ value, placeholder, onChange, password }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={!isVisiblePassword && password}
        style={[styles.input]}
      />
      {password ? (
        <Pressable
          style={styles.visiblePasswordWrapper}
          onPress={() => setIsVisiblePassword(!isVisiblePassword)}
        >
          {!isVisiblePassword && (
            <MaterialCommunityIcons
              size={22}
              name="eye-off"
              style={styles.visiblePassword}
            />
          )}
          {isVisiblePassword && (
            <MaterialCommunityIcons
              size={22}
              name="eye"
              style={styles.visiblePassword}
            />
          )}
        </Pressable>
      ) : (
        ""
      )}
    </View>
  );
};
export default Input;
