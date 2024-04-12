import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import StatItem from "../../components/StatItem/StatItem";

const StatisticScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.pressableList}>
        <Pressable
          onPress={() => navigator.navigate("Expense")}
          style={styles.btn}
        >
          <StatItem iconName="wallet-outline" titleReport="Income report" />
        </Pressable>

        <Pressable
          onPress={() => navigator.navigate("Expense")}
          style={styles.btn}
        >
          <StatItem iconName="bitcoin" titleReport="Expense report" />
        </Pressable>

        <Pressable
          onPress={() => navigator.navigate("Expense")}
          style={styles.btn}
        >
          <StatItem iconName="receipt" titleReport="Debt report" />
        </Pressable>

        <Pressable
          onPress={() => navigator.navigate("Receivable")}
          style={styles.btn}
        >
          <StatItem iconName="receipt" titleReport="Receivable report" />
        </Pressable>

        <Pressable
          onPress={() => navigator.navigate("IncomeAndExpense")}
          style={styles.btn}
        >
          <StatItem iconName="chart-line" titleReport="Income vs Expense" />
        </Pressable>

        <Pressable
          onPress={() => navigator.navigate("Expense")}
          style={styles.btn}
        >
          <StatItem iconName="chart-line" titleReport="Receivable vs debt" />
        </Pressable>
      </View>
    </View>
  );
};
export default StatisticScreen;
