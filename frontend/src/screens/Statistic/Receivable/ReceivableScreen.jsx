import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { COLORS } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getReportByType } from "@/services";
import { useEffect, useState } from "react";
import { convertString } from "@/utils";
import { format } from "date-fns";
import { useRoute } from "@react-navigation/native";

const ReceivableScreen = () => {
  const params = useRoute().params;
  console.log(params)
  const [data, setData] = useState([]);
  const [xLabels, setXLabels] = useState([]);

  useEffect(() => {
    const getFilterData = async () => {
      const res = await getReportByType(params.type, "month", {
        startDate: convertString("Y").value,
        endDate: new Date(),
      });

      const data = res.monthlyReport.map((item) => {
        return {
          value: item.amount / 1000,
        };
      });

      const xLabelArr = res.monthlyReport.map((item) => `${format(item.month, "LLL")}`);
      // console.log(data, xLabelArr)

      setData(data);
      setXLabels(xLabelArr);
    };

    getFilterData();
  }, []);

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.chartContainer}>
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
export default ReceivableScreen;
