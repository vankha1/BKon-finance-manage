import { Pressable, Text, View } from "react-native";
import { useState } from "react";

import styles from "./styles";
const Button = ({ children, size, onPress, className }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setPressed(!pressed);
        onPress ? onPress() : null;
      }}
      style={[
        styles.container,
        pressed ? styles.onPress : null,
        size === "small" ? styles.size : null,
        className,
      ]}
    >
      {children}
    </Pressable>
  );
};
export default Button;
