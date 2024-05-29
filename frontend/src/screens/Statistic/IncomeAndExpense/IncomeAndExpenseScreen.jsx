import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { COLORS } from "@/constants";
import { useEffect, useState } from "react";
import { balanceTwoArray, formatDataForCompare } from "@/utils";
import { fetchTwoReports } from "@/services";

const IncomeAndExpenseScreen = () => {
  const params = useRoute().params;
  console.log(params);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const sliceColor = [COLORS.buttonBg, "red"];

  useEffect(() => {
    const getFilterData = async () => {
      const [incomes, expenses] = await fetchTwoReports(params.type[0], params.type[1])

      const formattedIncomes = formatDataForCompare(incomes.data.monthlyReport);
      const formattedExpenses = formatDataForCompare(
        expenses.data.monthlyReport
      );

      const incomesData = balanceTwoArray(
        formattedIncomes,
        formattedExpenses,
        0
      ).arr1;
      const expensesData = balanceTwoArray(
        formattedIncomes,
        formattedExpenses,
        0
      ).arr2;

      // console.log(incomesData, expensesData);

      setIncomeData(
        incomesData.map((item) => {
          return {
            value: item.amount,
          };
        })
      );
      setExpenseData(
        expensesData.map((item) => {
          return {
            value: item.amount,
          };
        })
      );
      setXLabels(formattedExpenses.map((item) => item.monthName));
    };

    getFilterData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>{`${params.name} Report`}</Text>
        <LineChart
          // pointerConfig={{
          //     showDataPointOnFocus: true,
          // }}
          hideDataPoints={false}
          hideDataPoints1={false}
          curved={true}
          color1={sliceColor[0]}
          color2={sliceColor[1]}
          dataPointsColor1={sliceColor[0]}
          dataPointsColor2={sliceColor[1]}
          thickness1={3}
          thickness2={3}
          xAxisLength={Dimensions.get("window").width - 100}
          xAxisIndicesWidth={2}
          verticalLinesSpacing={2}
          data={incomeData}
          data2={expenseData}
          scrollAnimation={true}
          isAnimated={true}
          xAxisLabelTexts={xLabels}
          xAxisThickness={2}
          yAxisThickness={2}
          spacing={35}
          rulesLength={Dimensions.get("window").width - 100}
        />
      </View>

      {/* Notation */}
      <View style={styles.pieChartNotesWrapper}>
        {[params.type[0], params.type[1]].map((value, index) => {
          return (
            <View style={styles.pieChartNotes} key={index}>
              <MaterialCommunityIcons name="circle" color={sliceColor[index]} />
              <Text>{value}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default IncomeAndExpenseScreen;
