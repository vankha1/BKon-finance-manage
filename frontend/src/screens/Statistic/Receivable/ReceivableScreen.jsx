import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { COLORS } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getReportByType, getTransactionPeriod } from "@/services";
import { useEffect, useState } from "react";
import {
  convertString,
  getFirstDateOfMonth,
  getTopOfListByName,
} from "@/utils";
import { format, set } from "date-fns";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { LocalizationKey, i18n } from "@/localization";
import { useSelector } from "react-redux";

const RenderTopPeople = ({ name, amount, finishing }) => {
  return (
    <View style={styles.topReceivesItem}>
      <Text style={styles.titleTopReceives}>{name}</Text>
      <Progress.Bar
        progress={amount > 0 ? finishing / amount : 0}
        height={8}
        width={200}
        color={COLORS.buttonBg}
        unfilledColor={COLORS.gray}
        borderWidth={1}
      />
      <Text style={styles.titleTopReceives}>{amount}</Text>
    </View>
  );
};
const ReceivableScreen = () => {
  const params = useRoute().params;
  console.log("ReceivableScreen: ", params);
  const [data, setData] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const [receivables, setReceivables] = useState([]);
  const localeState = useSelector((state) => state.locale);
  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);
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

      const xLabelArr = res.monthlyReport.map(
        (item) => `${format(item.month, "LLL")}`
      );
      // console.log(data, xLabelArr)

      setData(data);
      setXLabels(xLabelArr);
    };
    const getReceivable = async () => {
      const response = await getTransactionPeriod(
        params.type,
        getFirstDateOfMonth(),
        new Date()
      );
      setReceivables(response);
    };
    getReceivable();
    getFilterData();
  }, []);
  const lstTopPeople = getTopOfListByName(receivables, params.type);
  console.log("lstTopPeople: ", lstTopPeople);
  return (
    <View style={styles.container}>
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
        <Text style={styles.title}>
          {params.type === "debts"
            ? i18n.t(LocalizationKey.TOP_OF_LENDERS)
            : i18n.t(LocalizationKey.TOP_OF_RECEIVERS)}
        </Text>
        <View style={{ width: "100%", backgroundColor: "#FFFFFF", padding: 0 }}>
          <FlatList
            contentContainerStyle={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              padding: 20,
            }}
            showsVerticalScrollIndicator={true} // remove scrollbar
            data={lstTopPeople}
            renderItem={({ item }) => {
              return (
                <RenderTopPeople
                  name={item.name}
                  amount={item.amount}
                  finishing={item.finishing}
                />
              );
            }}
            keyExtractor={(item) => item?._id}
          />
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
    </View>
  );
};
export default ReceivableScreen;
