import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useState } from "react";

const SettingCard = ({
  iconType,
  bgColorIcon,
  colorIcon,
  nameCard,
  data,
  onPress
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const Comp = onPress ? TouchableOpacity : View
  return (
    <Comp style={styles.container} onPress={onPress}>
      <View style={styles.selectInput}>
        <View>
          <IconWrapper
            iconType={iconType}
            size={24}
            bgColor={bgColorIcon}
            colorIcon={colorIcon}
            LibIcon={Feather}
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
      {isOpened && data && (
        <View
          style={{
            backgroundColor: COLORS.lightWhite,
            paddingHorizontal: 10,
            borderRadius: 10,
            overflow: "scroll",
          }}
        >
          {data.map((value, index) => (
            <TouchableOpacity
              style={[
                { width: "100%", marginBottom: 10 },
                index === data.length - 1 && { marginBottom: 0 },
                { backgroundColor: COLORS.white }
              ]}
              key={index}
            >
              <Text style={styles.option}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Comp>
  );
};
export default SettingCard;
