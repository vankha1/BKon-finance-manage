import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { COLORS } from "../../constants";

const AccountCard = ({ iconName, infoTitle, infoText, data, onPress }) => {
  const [isOpened, setIsOpened] = useState(false);
  const Comp = onPress ? TouchableOpacity : View;
  return (
    <>
      <Comp style={styles.cardContainer} onPress={() => setIsOpened(!isOpened)}>
        <View style={[styles.selectInput]}>
          <IconWrapper
            iconType={iconName}
            LibIcon={MaterialCommunityIcons}
            bgColor="#eaffe9"
            colorIcon="#14b8a6"
            size={24}
          />

          <View style={styles.cardContent}>
            <Text style={[styles.infoTitle]}>{infoTitle}</Text>
            {!onPress && <Text style={styles.infoText}>{infoText}</Text>}
          </View>
          {onPress && (
            <Pressable>
              <MaterialCommunityIcons
                name={`chevron-${isOpened && data ? "down" : "right"}`}
                size={26}
                color={COLORS.gray2}
              />
            </Pressable>
          )}
        </View>
      </Comp>
      {isOpened && data && (
        <View
          style={{
            width: "90%",
            paddingHorizontal: 10,
            borderRadius: 10,
            overflow: "scroll",
            marginTop: -10,
          }}
        >
          {data.map((value, index) => (
            <TouchableOpacity
              style={[
                styles.selectOption,
                index === data.length - 1 && { marginBottom: 0 },
                { backgroundColor: "#eaffe9" },
              ]}
              key={index}
            >
              <Image
                source={require("../../../assets/images/bidv.png")}
                style={styles.bankImage}
              />
              <Text style={styles.option}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};
export default AccountCard;
