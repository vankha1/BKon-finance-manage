import { View, Text, Pressable } from "react-native";
import {
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome6,
} from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "@/constants";
import IconWrapper from "../Icon/Icon";

const Header = ({ title, libIcon, iconName, subTitle, addButton }) => {
    const navigator = useNavigation();
    return iconName ? (
        <View style={styles.header}>
            <View style={styles.content}>
                <Pressable
                    onPress={() => navigator.goBack()}
                    style={styles.backBtn}
                >
                    <Ionicons
                        name="chevron-back"
                        size={SIZES.xLarge}
                        style={{ color: "white" }}
                    />
                </Pressable>
                <View style={styles.titleWithIcon}>
                    {subTitle ? (
                        <View style={styles.headerWithSubTitle}>
                            <Text style={styles.headerTitleWithIcon}>
                                {title}
                            </Text>
                            <Text style={styles.subTitle}>{subTitle}</Text>
                        </View>
                    ) : (
                        <Text style={styles.headerTitleWithIcon}>{title}</Text>
                    )}
                </View>

                <Text style={styles.editStyle}></Text>
            </View>
        </View>
    ) : (
        <View style={styles.header}>
            <View style={styles.content}>
                <Pressable
                    onPress={() => navigator.goBack()}
                    style={styles.backBtn}
                >
                    <Ionicons
                        name="chevron-back"
                        size={SIZES.xLarge}
                        style={{ color: "white" }}
                    />
                </Pressable>
                <Text style={styles.headerTitle}>{title}</Text>
                {addButton ? (
                    <Pressable
                        onPress={
                            title === "List of debts"
                                ? () =>
                                      navigator.navigate("Transaction", {
                                          type: "Debt",
                                      })
                                : () =>
                                      navigator.navigate("Transaction", {
                                          type: "Receivable",
                                      })
                        }
                    >
                        <IconWrapper
                            iconType={"add"}
                            LibIcon={FontAwesome6}
                            size={32}
                            colorIcon={"white"}
                        />
                    </Pressable>
                ) : (
                    <Text></Text>
                )}
            </View>
        </View>
    );
};
export default Header;
