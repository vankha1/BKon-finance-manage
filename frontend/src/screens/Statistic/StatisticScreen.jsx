import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import StatItem from "../../components/StatItem/StatItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StatisticScreen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.pressableList}>
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="wallet-outline"
                    titleReport="Income report"
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="bitcoin"
                    titleReport="Expense report"
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="receipt"
                    titleReport="Debt report"
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="receipt"
                    titleReport="Receivable report"
                    onPress={() => navigator.navigate("Receivable")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="chart-line"
                    titleReport="Income vs Expense"
                    onPress={() => navigator.navigate("IncomeAndExpense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="chart-line"
                    titleReport="Receivable vs debt"
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />
            </View>
        </View>
    );
};
export default StatisticScreen;
