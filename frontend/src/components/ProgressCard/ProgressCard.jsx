import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

import { COLORS } from "../../constants";
import styles from "./styles";
import IconWrapper from "../Icon/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProgressCard = ({ type, iconType, progress, bgColorIcon, colorIcon }) => {
  return (
    <View style={styles.container}>
      <IconWrapper
        iconType={iconType}
        size={24}
        bgColor={bgColorIcon}
        colorIcon={colorIcon}
        LibIcon={MaterialCommunityIcons}
      />

      <View style={styles.progressContent}>
        <Text style={styles.typeName}>{type}</Text>
        <Progress.Bar
          progress={progress}
          width={250}
          color={COLORS.buttonBg}
          unfilledColor={COLORS.gray2}
          borderWidth={0}
        />
        <Text>spent: {progress * 100}%</Text>
      </View>
    </View>
  );
};
export default ProgressCard;
