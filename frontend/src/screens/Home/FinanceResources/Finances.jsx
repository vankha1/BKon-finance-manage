import { View, Text } from "react-native";
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
const Finances = () => {
    return (
        <View style={styles.container}>
            <Header title={"Finance Resources"}></Header>
            <View style={styles.financeContainer}>
                <FinanceResources
                    title={"Current Balance"}
                    amount={"$16,200"}
                ></FinanceResources>
                <FinanceResources
                    libIcon={MaterialCommunityIcons}
                    iconName={"cash"}
                    title={"Cash"}
                    amount={"$3000"}
                ></FinanceResources>
                <FinanceResources
                    libIcon={MaterialCommunityIcons}
                    iconName={"bank"}
                    title={"Bank"}
                    amount={"$5000"}
                ></FinanceResources>
                <FinanceResources
                    libIcon={Ionicons}
                    iconName={"wallet-outline"}
                    title={"E-Wallet"}
                    amount={"$100"}
                ></FinanceResources>
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
