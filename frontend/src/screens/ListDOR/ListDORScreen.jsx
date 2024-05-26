import { View, Text, ScrollView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import DORitem from "../../components/DeptOrReItem/DORitem";
import { COLORS } from "../../constants";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { Config } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addDebt } from "../../redux/slice/debts";

const ListDORScreen = () => {
  const params = useRoute().params;
  const [data, setData] = useState([]);
  const { listDebts } = useSelector(state => state.debt)
  const dispatch = useDispatch();

  const RenderItem = ({ notes, type, amount, date }) => {
    return (
      <DORitem
        note={notes}
        type={type}
        amount={amount}
        remaining="$1000"
        date={date}
      />
    );
  };

  useEffect(() => {
    const getListDOR = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log(params.type);
      const options = {
        method: "GET",
        url: `${Config.API_URL}/${params.type}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.request(options);
      // console.log(response.data);
      dispatch(addDebt(...response.data));
      setData(response.data);
    };

    getListDOR();
  }, [listDebts]);


  return (
    <View style={styles.container}>
      <Header title={`List of ${params.type}`} addButton={true} />
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false} // remove scrollbar
          data={data}
          renderItem={({ item }) => (
            <RenderItem
              notes={item?.note}
              type={params.type}
              amount={item?.amount} 
              date={format(item?.createdAt, "dd/MM/yyyy")}
            />
          )}
          keyExtractor={(item) => item?._id}
        />
      </View>
    </View>
  );
};
export default ListDORScreen;
