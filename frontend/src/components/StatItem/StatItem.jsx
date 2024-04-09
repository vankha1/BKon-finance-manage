import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from "./styles";
import { COLORS } from '../../constants';

const StatItem = ({ iconName, titleReport }) => {
  return (
    <View style={styles.statItemContainer}>
      <MaterialCommunityIcons
        name={iconName}
        size={30}
      />
      <Text style={styles.statItemText}>{titleReport}</Text>
    </View>
  );
};

export default StatItem;
