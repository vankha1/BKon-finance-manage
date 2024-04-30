import {
    MaterialCommunityIcons,
    AntDesign,
    Octicons,
    FontAwesome6,
} from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "./styles";
import { COLORS, SIZES, FONTFAMILIES } from "../../constants";
import * as Progress from "react-native-progress";
import HomeHeader from "../../components/Header/Home/HomeHeader";
const HomeScreen = () => {
    const name = "Diem";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.upper_header}>
                    <Text
                        style={{
                            color: COLORS.white,
                            fontFamily: FONTFAMILIES.medium,
                            fontSize: SIZES.xLarge,
                        }}
                    >
                        Hi, {name}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 13,
                        }}
                    >
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={SIZES.xLarge}
                            color={COLORS.white}
                        />
                        <View style={styles.avatar}></View>
                    </View>
                </View>
                <View style={styles.downer_header}>
                    <View style={styles.balance}>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontFamily: FONTFAMILIES.medium,
                                fontSize: SIZES.medium,
                                fontWeight: 500,
                            }}
                        >
                            Your balance
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontFamily: FONTFAMILIES.bold,
                                fontSize: SIZES.xMedium,
                                fontWeight: 700,
                            }}
                        >
                            $8,100
                        </Text>
                    </View>
                    <FontAwesome6
                        name="pen-to-square"
                        size={SIZES.xLarge}
                        color={COLORS.white}
                    />
                </View>
            </View>
            <View style={styles.container_cards}>
                <HomeHeader />
                <View style={styles.card}>
                    <View
                        style={[
                            styles.cardWith2Elements,
                            (fontFamily = FONTFAMILIES.medium),
                        ]}
                    >
                        <Text
                            style={{
                                fontFamily: FONTFAMILIES.medium,
                                fontSize: SIZES.xMedium,
                            }}
                        >
                            Cash
                        </Text>
                        <Text
                            style={{
                                fontFamily: FONTFAMILIES.semiBold,
                                fontSize: SIZES.xMedium,
                            }}
                        >
                            8,100$
                        </Text>
                    </View>
                    <View style={styles.cardWith2Elements}>
                        <Text
                            style={{
                                paddingLeft: 30,
                                fontFamily: FONTFAMILIES.medium,
                                fontSize: SIZES.medium,
                            }}
                        >
                            Bank card
                        </Text>
                        <Text
                            style={{
                                fontSize: SIZES.xSmall,
                                fontFamily: FONTFAMILIES.medium,
                                paddingLeft: 30,
                            }}
                        >
                            Not available
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardEleWithIcon_Left}>
                        <View style={styles.iconContainer}>
                            <AntDesign
                                name="creditcard"
                                size={SIZES.xLarge}
                                color={"#000"}
                            />
                        </View>
                    </View>
                    <View style={styles.cardEleWithIcon_Right}>
                        <Text
                            style={{
                                fontSize: SIZES.xSmall,
                                fontFamily: FONTFAMILIES.medium,
                            }}
                        >
                            Monthly Budget
                        </Text>
                        <Text
                            style={{
                                fontSize: SIZES.xMedium,
                                fontFamily: FONTFAMILIES.semiBold,
                            }}
                        >
                            $8,100
                        </Text>
                        <Progress.Bar
                            progress={5 / 8.1}
                            width={220}
                            height={4}
                            borderWidth={0}
                            unfilledColor={COLORS.gray3}
                            color={COLORS.buttonBg}
                        />
                        <View style={styles.belowBarProgress}>
                            <Text style={{ fontSize: SIZES.xSmall }}>
                                spent: $5,000
                            </Text>
                            <Text style={{ fontSize: SIZES.xSmall }}>
                                left: $3,100
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardEleWithIcon_Left}>
                        <View style={styles.iconContainer}>
                            <Octicons
                                name="diff-added"
                                size={SIZES.xLarge}
                                color={"#000"}
                            />
                        </View>
                    </View>
                    <View style={styles.cardEleWithIcon_Right}>
                        <Text style={{ fontSize: SIZES.small }}>
                            Receivable
                        </Text>
                        <Text>$8,100</Text>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                paddingRight: 29,
                            }}
                        >
                            <Text style={{ fontSize: SIZES.xSmall }}>
                                8,100/15,000
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.addWidget}>
                    <AntDesign
                        name="plus"
                        size={SIZES.medium}
                        color={"black"}
                    />
                    <Text style={{ paddingLeft: 10 }}>Add new widget</Text>
                </View>
            </View>
        </View>
    );
};
export default HomeScreen;
