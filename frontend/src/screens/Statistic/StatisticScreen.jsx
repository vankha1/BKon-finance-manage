import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import StatItem from "../../components/StatItem/StatItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LocalizationKey, i18n } from "../../localization";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const StatisticScreen = () => {
    const navigator = useNavigation();
    const localeState = useSelector(state => state.locale);

    useEffect(() => {
        i18n.locale = localeState.locale
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.pressableList}>
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="wallet-outline"
                    titleReport={i18n.t(LocalizationKey.INCOME_REPORT)}
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="bitcoin"
                    titleReport={i18n.t(LocalizationKey.EXPENSE_REPORT)}
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="receipt"
                    titleReport={i18n.t(LocalizationKey.DEBT_REPORT)}
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="receipt"
                    titleReport={i18n.t(LocalizationKey.RECEIVABLE_REPORT)}
                    onPress={() => navigator.navigate("Receivable")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="chart-line"
                    titleReport={i18n.t(LocalizationKey.INCOME_VS_EXPENSE)}
                    onPress={() => navigator.navigate("IncomeAndExpense")}
                    className={styles.btn}
                />

                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName="chart-line"
                    titleReport={i18n.t(LocalizationKey.RECEIVABLE_VS_DEBT)}
                    onPress={() => navigator.navigate("Expense")}
                    className={styles.btn}
                />
            </View>
        </View>
    );
};
export default StatisticScreen;
