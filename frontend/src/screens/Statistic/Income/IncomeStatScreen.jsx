import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PieChart from "react-native-pie-chart";
import { BarChart } from "react-native-gifted-charts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";

import styles from "./styles";
import { COLORS } from "@/constants";
import { convertString, formatReportData } from "@/utils";
import {  getReportByType } from "@/services";
import { useDispatch, useSelector } from "react-redux";

const IncomeStatScreen = () => {
  const params = useRoute().params;
  // console.log(params);

  const sliceColor = [
    "#f59e0b",
    "#facc15",
    "#14b8a6",
    "#ec4899",
    "#6366f1",
    "#3b82f6",
  ].slice(0, params.series.length);


  const [data, setData] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState(0);
  const { isChanged } = useSelector((state) => state.transaction)
  const filterByTime = ["D", "W", "M"];

  useEffect(() => {
    const filterOpt = filterByTime[selectedBtn];
    // console.log(filterOpt, convertString("Y").value, new Date());

    const getFilterData = async () => {
      const res = await getReportByType(
        params.type,
        convertString(filterOpt).newStr,
        {
          startDate: convertString("Y").value,
          endDate: new Date(),
        }
      );

      const dataByType =
        filterOpt === "D"
          ? res.dailyReport
          : filterOpt === "W"
          ? res.weeklyReport
          : res.monthlyReport;

      const formattedData = formatReportData(filterOpt, dataByType);
      
      setData(formattedData);
    };

    getFilterData();
  }, [selectedBtn, isChanged]);

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
                  width: "33.3%",
                  alignContent: "center",
                },
                index !== filterByTime.length - 1 && { borderRightWidth: 1 },
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
          key={JSON.stringify(data)}
          barWidth={30}
          noOfSections={10}
          barBorderRadius={2}
          frontColor={COLORS.buttonBg}
          data={data}
          yAxisThickness={1}  
          xAxisThickness={0}
          spacing={15}
          rulesLength={Dimensions.get("window").width - 110}
        />
      </View>

      {params.series?.length !== 0 ? (
        <View style={styles.chartContainer}>
          <PieChart
            key={JSON.stringify(params.series)}
            widthAndHeight={200}
            series={params.series}
            sliceColor={sliceColor}
            coverRadius={0.8}
          />
          <View style={styles.pieChartNotesWrapper}>
            {params.categories.map((value, index) => {
              return (
                <View style={styles.pieChartNotes} key={index}>
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
      ) : (
        ""
      )}
    </ScrollView>
  );
};
export default IncomeStatScreen;
