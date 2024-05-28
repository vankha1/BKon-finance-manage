import { Pressable, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PieChart from "react-native-pie-chart";
import { BarChart } from "react-native-gifted-charts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { COLORS } from "../../../constants";
import HistoryCard from "../../../components/HistoryCard/HistoryCard";
import { convertString, categories } from "../../../utils";
import { getReportByType } from "../../../services";
import { Config } from "../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const IncomeStatScreen = () => {
  const params = useRoute().params;
  const widthAndHeight = 200;
  const series = [100, 321, 123, 789, 537, 123];

  const bankNames = [
    "BIDV",
    "Mono Bank",
    "Mono Bank",
    "Mono Bank",
    "Mono Bank",
    "Mono Bank",
  ];

  const timeTransaction = [
    "12:00AM",
    "12:30AM",
    "12:30AM",
    "13:00AM",
    "13:30AM",
    "13:30AM",
  ];

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
    { value: 500, label: "T" },
    { value: 745, label: "W" },
    { value: 320, label: "T" },
    { value: 600, label: "F" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];

  const [selectedBtn, setSelectedBtn] = useState(0);
  const filterByTime = ["D", "W", "M"];

  useEffect(() => {
    const filterOpt = filterByTime[selectedBtn];
    console.log(filterByTime[selectedBtn]);

    const getFilterData = async () => {
      const token = await AsyncStorage.getItem("token");
      // const options = {
      //   method: "GET",
      //   url: `${Config.API_URL}/report/incomes/${
      //     convertString(filterOpt).newStr
      //   }`,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   params: {
      //     startDate: convertString(filterOpt).value,
      //     endDate: convertString("D").value,
      //   },
      // };
      try {
        const res = await getReportByType(
          "incomes",
          convertString(filterOpt).newStr,
          {
            startDate: convertString(filterOpt).value,
            endDate: convertString("D").value,
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getFilterData();
  }, []);

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.barContainer}>
        <View style={styles.barChartBtn}>
          {filterByTime.map((value, index) => (
            <Pressable
              key={index}
              style={[
                {
                  backgroundColor:
                    selectedBtn === index ? COLORS.gray2 : COLORS.gray3,
                  paddingVertical: 2,
                  width: "20%",
                  alignContent: "center",
                },
                index !== filterByTime.length - 1
                  ? { borderRightWidth: 1 }
                  : null,
              ]}
              onPress={() => {
                setSelectedBtn(index);
              }}
            >
              <Text style={{ textAlign: "center" }}>{value}</Text>
            </Pressable>
          ))}
        </View>
        <BarChart
          barWidth={25}
          noOfSections={3}
          barBorderRadius={4}
          frontColor={COLORS.buttonBg}
          data={data}
          yAxisThickness={0}
          xAxisThickness={0}
          spacing={13}
        />
      </View>
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.8}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 10,
          }}
        >
          {categories.map((value, index) => {
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
        <Text style={styles.progressBar}>Transaction History</Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ fontSize: 18 }}>Yesterday</Text>
          {series.slice(0, 2).map((value, index) => {
            return (
              <HistoryCard
                key={index}
                type={categories[index]}
                money={value}
                bankName={bankNames[index]}
                timeTransaction={timeTransaction[index]}
                iconType={iconTypes[index]}
                colorIcon={COLORS.buttonBg}
              />
            );
          })}
        </View>

        <View style={{ width: "100%" }}>
          <Text style={{ fontSize: 18 }}>25/03/2023</Text>
          {series.slice(0, 2).map((value, index) => {
            return (
              <HistoryCard
                key={index}
                type={categories[index]}
                money={value}
                bankName={bankNames[index]}
                timeTransaction={timeTransaction[index]}
                iconType={iconTypes[index]}
                colorIcon={COLORS.buttonBg}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default IncomeStatScreen;
