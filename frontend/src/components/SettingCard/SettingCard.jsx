import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const SettingCard = ({ iconType, bgColorIcon, colorIcon, nameCard }) => {
  return (
    <View style={styles.container}>
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
      <Pressable>
        <MaterialCommunityIcons name="chevron-right" size={26} color={COLORS.gray2}/>
      </Pressable>
    </View>
  );
};
export default SettingCard;
