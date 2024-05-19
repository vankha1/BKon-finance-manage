import { View, Text } from "react-native";
import Header from "../../../../../components/Header/Header";
import FinanceResources from "../../../../../components/FinanceResource/FinanceResources";
import {
    MaterialCommunityIcons,
    Ionicons,
    Feather,
    FontAwesome6,
} from "@expo/vector-icons";
import styles from "../styles";
import IconWrapper from "../../../../../components/Icon/Icon";
import { SIZES } from "../../../../../constants";
import { ScrollView } from "react-native-gesture-handler";
const CurrentBankAccount = () => {
    return (
        <View>
            <Header
                title={"Meme Bank"}
                iconName={"bank"}
                libIcon={MaterialCommunityIcons}
            ></Header>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <View style={styles.balance}>
                        <Text style={styles.title}>Current Balance</Text>
                        <Text style={styles.amount}>$5000</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.search}>
                            <Text style={styles.searchTitle}>
                                Transaction History
                            </Text>
                            <IconWrapper
                                iconType={"search"}
                                LibIcon={Feather}
                                size={SIZES.medium}
                            ></IconWrapper>
                        </View>
                        <View>
                            <Text style={styles.titleContent}>Yesterday</Text>
                            <FinanceResources
                                title={"Shopping"}
                                iconName={"shirt-outline"}
                                amount={"$3000"}
                                subTitle={"Cash"}
                                Time={"10:12 AM"}
                                libIcon={Ionicons}
                            ></FinanceResources>
                            <FinanceResources
                                title={"Refueling"}
                                iconName={"car-side"}
                                amount={"$50"}
                                subTitle={"Cash"}
                                Time={"6:12 AM"}
                                libIcon={FontAwesome6}
                            ></FinanceResources>
                        </View>
                        <View>
                            <Text style={styles.titleContent}>25/03/2024</Text>
                            <FinanceResources
                                title={"Shopping"}
                                iconName={"shirt-outline"}
                                amount={"$3000"}
                                subTitle={"Cash"}
                                Time={"10:12 AM"}
                                libIcon={Ionicons}
                            ></FinanceResources>
                            <FinanceResources
                                title={"Refueling"}
                                iconName={"car-side"}
                                amount={"$50"}
                                subTitle={"Cash"}
                                Time={"6:12 AM"}
                                libIcon={FontAwesome6}
                            ></FinanceResources>
                        </View>
                        <View>
                            <Text style={styles.titleContent}>24/03/2024</Text>
                            <FinanceResources
                                title={"Shopping"}
                                iconName={"shirt-outline"}
                                amount={"$3000"}
                                subTitle={"Cash"}
                                Time={"10:12 AM"}
                                libIcon={Ionicons}
                            ></FinanceResources>
                            <FinanceResources
                                title={"Refueling"}
                                iconName={"car-side"}
                                amount={"$50"}
                                subTitle={"Cash"}
                                Time={"6:12 AM"}
                                libIcon={FontAwesome6}
                            ></FinanceResources>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default CurrentBankAccount;
