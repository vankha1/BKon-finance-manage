import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import DORitem from "@/components/DeptOrReItem/DORitem";
import styles from "./styles";
import Header from "@/components/Header/Header";
import { addDebt } from "@/redux/slice/debts";
import { getTransactions } from "@/services";
import { LocalizationKey, i18n } from "@/localization";

const ListDORScreen = () => {
  const params = useRoute().params;
  const [data, setData] = useState([]);
  const { isChanged } = useSelector((state) => state.transaction);
  const [isLoading, setIsLoading] = useState(false);


  const localeState = useSelector((state) => state.locale);
  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);


  const RenderItem = ({ notes, type, amount, date, remaining, id }) => {
    return (
      <DORitem
        note={notes}
        type={type}
        amount={amount}
        remaining={remaining || amount}
        date={date}
        id={id}
      />
    );
  };

  useLayoutEffect(() => {
    const getListDOR = async () => {
      
      setIsLoading(true);
      const response = await getTransactions(params.type);
      
      setIsLoading(false);
      setData(response);
    };

    getListDOR();
  }, [params.type, isChanged]);

  console.log("listDOR: ", params.type);

  return (
    <View style={styles.container}>
      <Header
        title={
          params.type === "debts"
            ? i18n.t(LocalizationKey.LIST_OF_DEBTS)
            : i18n.t(LocalizationKey.LIST_OF_RECEIVABLES)
        }
        addButton={true}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : data?.length === 0 ? (
        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          NO {params.type.toUpperCase()} FOUND !!!
        </Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false} // remove scrollbar
          data={data}
          renderItem={({ item }) => (
            <RenderItem
              notes={item?.note}
              id={item?._id}
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
