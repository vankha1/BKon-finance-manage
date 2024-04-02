import { COLORS } from "../../constants";

import { ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StatisticScreen = () => {
  const widthAndHeight = 200;
  const series = [100, 321, 123, 789, 537, 123];
  const sliceColor = [
    "#f59e0b",
    "#facc15",
    "#14b8a6",
    "#ec4899",
    "#6366f1",
    "#3b82f6",
  ];

  return (
    <ScrollView style={styles.container}>
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
      </View>
    </ScrollView>
  );
};
export default StatisticScreen;
