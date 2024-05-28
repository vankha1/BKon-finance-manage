import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { COLORS } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "@/config";
import axios from "axios";

const DebtScreen = () => {
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

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const options = {
          method: "GET",
          url: `${Config.API_URL}/report/debts`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        const res = await axios.request(options);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    // getData();
  }, [])

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Receivable report</Text>
        <LineChart
          // pointerConfig={{
          //     showDataPointOnFocus: true,
          // }}
          hideDataPoints={false}
          curved={true}
          color1={COLORS.buttonBg}
          dataPointsColor1={COLORS.buttonBg}
          thickness1={6}
          xAxisLength={Dimensions.get("window").width - 100}
          xAxisIndicesWidth={2}
          verticalLinesSpacing={2}
          data={data}
          scrollAnimation={true}
          isAnimated={true}
          xAxisLabelTexts={xLabels}
          xAxisThickness={2}
          spacing={35}
          yAxisThickness={2}
          rulesLength={Dimensions.get("window").width - 100}
        />
      </View>

      <View style={styles.topReceives}>
        <Text style={styles.title}>Top of receives</Text>
        <View
          style={{ width: "100%", backgroundColor: "#FFFFFF", padding: 20 }}
        >
          <View style={styles.topReceivesItem}>
            <Text style={styles.titleTopReceives}>Tom</Text>
            <Progress.Bar
              progress={0.15}
              height={8}
              width={210}
              color={COLORS.buttonBg}
              unfilledColor={COLORS.gray}
              borderWidth={1}
            />
            <Text style={styles.titleTopReceives}>$2,500</Text>
          </View>

          <View style={styles.topReceivesItem}>
            <Text style={styles.titleTopReceives}>Tom</Text>
            <Progress.Bar
              progress={0.15}
              height={8}
              width={210}
              color={COLORS.buttonBg}
              unfilledColor={COLORS.gray}
              borderWidth={1}
            />
            <Text style={styles.titleTopReceives}>$2,500</Text>
          </View>
        </View>

        <Pressable style={styles.moreBtn}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.gray3,
            }}
          >
            More{" "}
          </Text>
          <MaterialCommunityIcons
            name="chevron-double-right"
            size={24}
            color={COLORS.gray3}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};
export default DebtScreen;
