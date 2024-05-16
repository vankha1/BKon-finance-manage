import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../../constants";

const Header = ({ title }) => {
    const navigator = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.content}>
                <Pressable onPress={() => navigator.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        size={SIZES.xLarge}
                        style={styles.backBtn}
                    />
                </Pressable>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </View>
    );
};
export default Header;
