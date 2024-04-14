import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useState } from "react";

const Select = ({
  iconType,
  bgColorIcon="white",
  colorIcon,
  iconStyle={ borderWidth: 1, borderColor: COLORS.buttonBg },
  inputStyle,
  nameCard,
  data,
  onPress,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
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
          <Text style={styles.typeName}>{data[selectedIndex] ? data[selectedIndex] : nameCard}</Text>
        </View>
        <Pressable onPress={() => setIsOpened(!isOpened)}>
          <MaterialCommunityIcons
            name={`chevron-${isOpened && data ? "down" : "right"}`}
            size={26}
            color={COLORS.gray2}
          />
        </Pressable>
      </View>
      {isOpened && data && (
        <View
          style={{
            marginTop: 10,
            backgroundColor: COLORS.gray3,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.gray3,
            overflow: "scroll",
          }}
        >
          {data.map((value, index) => (
            <TouchableOpacity
              style={[
                { width: "100%", marginBottom: 10 },
                index === selectedIndex
                  ? { backgroundColor: COLORS.mainLightBackground }
                  : { backgroundColor: COLORS.gray },
                index === 0 && {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
                index === data.length - 1 && {
                  marginBottom: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
              ]}
              key={index}
              onPress={() => setSelectedIndex(index)}
            >
              <Text style={styles.option}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Comp>
  );
};
export default Select;
