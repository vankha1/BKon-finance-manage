import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { useState } from "react";

const Select = ({
  iconType,
  bgColorIcon="white",
  colorIcon,
  iconStyle={ borderWidth: 1, borderColor: COLORS.buttonBg },
  inputStyle,
  nameCard,
  chidren,
  data,
  onPress,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  
  const Comp = onPress ? TouchableOpacity : View;
  return (
    <Comp style={styles.container} onPress={onPress}>
      <View style={[styles.selectInput, inputStyle]}>
        <View>
          <IconWrapper
            iconType={iconType}
            size={24}
            bgColor={bgColorIcon}
            colorIcon={colorIcon}
            LibIcon={Feather}
            className={iconStyle}
          />
        </View>

        <View style={styles.progressContent}>
          <Text style={styles.typeName}>{nameCard}</Text>
        </View>
        <Pressable onPress={() => setIsOpened(!isOpened)}>
          <MaterialCommunityIcons
            name={`chevron-${isOpened && data ? "down" : "right"}`}
            size={26}
            color={COLORS.gray2}
          />
        </Pressable>
      </View>
      {isOpened && data && chidren}
    </Comp>
  );
};
export default Select;
