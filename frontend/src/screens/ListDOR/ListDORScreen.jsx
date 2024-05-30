import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import DORitem from "@/components/DeptOrReItem/DORitem";
import styles from "./styles";
import Header from "@/components/Header/Header";
import { addDebt } from "@/redux/slice/debts";
import { getTransactions } from "@/services";

const ListDORScreen = () => {
  const params = useRoute().params;
  const [data, setData] = useState([]);
  const { listDebts } = useSelector((state) => state.debt);
  const [isLoading, setIsLoading] = useState(false);

  const RenderItem = ({ notes, type, amount, date, remaining }) => {
    return (
      <DORitem
        note={notes}
        type={type}
        amount={amount}
        remaining={remaining}
        date={date}
      />
    );
  };

  useEffect(() => {
    const getListDOR = async () => {
      console.log(params.type);
      setIsLoading(true);
      const response = await getTransactions(params.type);
      //console.log("running");
      setIsLoading(false);
      setData(response);
    };
    getListDOR();
  }, [listDebts]);

  console.log(listDebts);
  return (
    <View style={styles.container}>
      <Header title={`List of ${params.type}`} addButton={true} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : data?.length === 0 ? (
        <Text style={{ marginTop: 10, textAlign: "center" }}>
          No {params.type} found!!
        </Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false} // remove scrollbar
          data={data}
          renderItem={({ item }) => (
            <RenderItem
              notes={item?.note}
              type={params.type}
              amount={item?.amount}
              date={format(item?.createdAt, "dd/MM/yyyy")}
              remaining={
                params.type === "debts"
                  ? item?.amount - item?.paid
                  : item?.amount - item?.received
              }
            />
          )}
          keyExtractor={(item) => item?._id}
        />
      )}
    </View>
  );
};
export default ListDORScreen;
