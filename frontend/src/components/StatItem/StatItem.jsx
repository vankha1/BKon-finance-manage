import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from "./styles";

const StatItem = ({ iconName, titleReport, className, iconStyle, textStyle }) => {
  return (
    <View style={[styles.statItemContainer, className]}>
      <MaterialCommunityIcons
        name={iconName}
        size={30}
        style={iconStyle}
      />
      <Text style={[styles.statItemText, textStyle]}>{titleReport}</Text>
    </View>
  );
};

export default StatItem;
