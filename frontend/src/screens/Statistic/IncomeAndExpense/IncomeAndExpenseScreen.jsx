import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import styles from "./styles";
import { COLORS } from "@/constants";

const IncomeAndExpenseScreen = () => {
  const data = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
  ];
  const data2 = [
    { value: 80 },
    { value: 10 },
    { value: 70 },
    { value: 50 },
    { value: 20 },
    { value: 50 },
    { value: 90 },
    { value: 5 },
    { value: 80 },
    { value: 70 },
    { value: 70 },
    { value: 90 },
  ];

  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Receivable report</Text>
        <LineChart
          // pointerConfig={{
          //     showDataPointOnFocus: true,
          // }}
          hideDataPoints={false}
          hideDataPoints1={false}
          curved={true}
          color1={COLORS.buttonBg}
          color2={"red"}
          dataPointsColor1={COLORS.buttonBg}
          dataPointsColor2={"red"}
          thickness1={6}
          thickness2={6}
          xAxisLength={Dimensions.get("window").width - 100}
          xAxisIndicesWidth={2}
          verticalLinesSpacing={2}
          data={data}
          data2={data2}
          scrollAnimation={true}
          isAnimated={true}
          xAxisLabelTexts={xLabels}
          xAxisThickness={2}
          spacing={35}
          yAxisThickness={2}
          rulesLength={Dimensions.get("window").width - 100}
        />
      </View>
    </View>
  );
};
export default IncomeAndExpenseScreen;
