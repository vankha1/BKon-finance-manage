import { View, Text, Pressable } from "react-native";
import FinanceResources from "../../../components/FinanceResource/FinanceResources";
import {
    MaterialCommunityIcons,
    Ionicons,
    AntDesign,
} from "@expo/vector-icons";
import { SIZES, FONTFAMILIES } from "../../../constants";
import Header from "../../../components/Header/Header";
import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Finances = () => {
    const navigator = useNavigation();
    const navigateTo = (screen) => {
        navigator.navigate(screen);
    };
    return (
        <View style={styles.container}>
            <Header title={"Finance Resources"}></Header>
            <View style={styles.financeContainer}>
                <FinanceResources
                    title={"Current Balance"}
                    amount={"$16,200"}
                ></FinanceResources>
                <Pressable onPress={() => navigateTo("CurrentCash")}>
                    <FinanceResources
                        libIcon={MaterialCommunityIcons}
                        iconName={"cash"}
                        title={"Cash"}
                        amount={"$3000"}
                    ></FinanceResources>
                </Pressable>

                <Pressable onPress={() => navigateTo("CurrentBankAccount")}>
                    <FinanceResources
                        libIcon={MaterialCommunityIcons}
                        iconName={"bank"}
                        title={"Bank"}
                        amount={"$5000"}
                    ></FinanceResources>
                </Pressable>
                <Pressable onPress={() => navigateTo("CurrentEWallet")}>
                    <FinanceResources
                        libIcon={Ionicons}
                        iconName={"wallet-outline"}
                        title={"E-Wallet"}
                        amount={"$100"}
                    ></FinanceResources>
                </Pressable>
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.addWidget}>
                    <AntDesign
                        name="plus"
                        size={SIZES.medium}
                        color={"black"}
                    />
                    <Text
                        style={{
                            paddingLeft: 10,
                            fontSize: SIZES.tiny,
                            fontFamily: FONTFAMILIES.medium,
                        }}
                    >
                        Add new account
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};
export default Finances;
