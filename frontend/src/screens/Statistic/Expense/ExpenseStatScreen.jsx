import { ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";
import {
  BarChart,
  LineChart,
  PopulationPyramid,
} from "react-native-gifted-charts";

import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";

const ExpenseStatScreen = () => {
  const widthAndHeight = 200;
  const series = [100, 321, 123, 789, 537, 123];
  const categories = [
    "Electronics",
    "Groceries",
    "Education",
    "Health",
    "Entertainment",
    "Others",
  ];
  const sumOfSeries = series.reduce((a, b) => a + b, 0);
  const sliceColor = [
    "#f59e0b",
    "#facc15",
    "#14b8a6",
    "#ec4899",
    "#6366f1",
    "#3b82f6",
  ];

  const bgColorIcon = [
    "#ffdad6",
    "#fdf5cc",
    "#eaffe9",
    "#e9ddff",
    "#d6d8ff",
    "#d6e4ff",
  ];

  const iconTypes = [
    "lightning-bolt-outline",
    "shopping",
    "book-education",
    "silverware-fork-knife",
    "tshirt-v",
    "dots-horizontal-circle-outline",
  ];

  const data = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];

  return (
    <ScrollView style={styles.container}>
      <BarChart
        barWidth={25}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="#177AD5"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
      />
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.7}
        />
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
        >
          {series.map((value, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
                key={index}
              >
                <MaterialCommunityIcons
                  name="circle"
                  color={sliceColor[index]}
                />
                <Text>{value}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressBar}>Progress Bars</Text>
        {series.map((value, index) => {
          return (
            <ProgressCard
              key={index}
              type={categories[index]}
              progress={+parseFloat(value / sumOfSeries).toFixed(2)}
              iconType={iconTypes[index]}
              bgColorIcon={bgColorIcon[index]}
              colorIcon={sliceColor[index]}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
export default ExpenseStatScreen;
