import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../../constants";
import IconWrapper from "../Icon/Icon";

const Header = ({ title, libIcon, iconName, subTitle }) => {
    const navigator = useNavigation();
    return iconName ? (
        <View style={styles.headerWithIcon}>
            <View style={styles.contentWithEdit}>
                <Pressable onPress={() => navigator.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        size={SIZES.xLarge}
                        style={styles.backBtn}
                    />
                </Pressable>
                <View style={styles.titleWithIcon}>
                    <IconWrapper
                        LibIcon={libIcon}
                        iconType={iconName}
                        size={SIZES.xLarge}
                        haveBorder={true}
                        borderSize={"small"}
                        bgColor={"white"}
                    ></IconWrapper>
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

                <Text style={styles.editStyle}>Edit</Text>
            </View>
        </View>
    ) : (
        // <View style={styles.header}>
        //     <View style={styles.content}>
        //         <Pressable onPress={() => navigator.goBack()}>
        //             <Ionicons
        //                 name="chevron-back"
        //                 size={SIZES.xLarge}
        //                 style={styles.backBtn}
        //             />
        //         </Pressable>
        //         <Text style={styles.headerTitle}>{title}</Text>
        //     </View>
        // </View>
        <View style={styles.header}>
            <Pressable onPress={() => navigator.goBack()}>
                <Ionicons
                    name="chevron-back"
                    size={SIZES.xLarge}
                    style={styles.backBtn}
                />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text></Text>
        </View>
    );
};
export default Header;
