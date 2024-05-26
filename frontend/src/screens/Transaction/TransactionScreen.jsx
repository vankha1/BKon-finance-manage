import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'

import styles from "./styles";
import { COLORS, SIZES } from "../../constants";
import Select from "../../components/Select/Select";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import IconWrapper from "../../components/Icon/Icon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Config } from "../../config";
import { addDebt } from "../../redux/slice/debts";

const TransactionScreen = () => {
  const params = useRoute().params;
  const navigator = useNavigation()
  const checkDOR = params.type === "debts" || params.type === "receivables";
  const dispatch = useDispatch();

  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categoryIdx, setCategoryIdx] = useState(null);

  const [amount, setAmount] = useState("");
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [lender, setLender] = useState("");
  const [notes, setNotes] = useState("");

  const handleOnChangeDate1 = (e, selectedDate) => {
    if (e.type === "set") {
      const currentDate = selectedDate || date1;
      console.log(currentDate, date1);
      setDate1(currentDate);
    }

    setShowPicker1(false);
  };
  const handleOnChangeDate2 = (e, selectedDate) => {
    if (e.type === "set") {
      const currentDate = selectedDate || date2;
      console.log(currentDate, date2);
      setDate2(currentDate);
    }

    setShowPicker2(false);
  };
  const data = [
    "Receive by cash",
    "Receive by bank accounts",
    "Receive by e-wallets",
    "Other",
  ];

  const data1 = ["Food and drink", "Shopping", "Refueling", "Others"];
  const { listDebts } = useSelector(state => state.debt)
  const handleSave = async () => {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method: "POST",
      url: `${Config.API_URL}/${params.type}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        amount,
        borrowDate: date1.toString(),
        repaidDate: date2.toString(),
        lenderName: lender,
        note: notes,
      },
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        dispatch(addDebt({ value: !listDebts}))
        navigator.goBack();
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={`New ${params.type}`} />

      <View style={styles.content}>
        <Toggle
          iconType={"credit-card"}
          colorIcon={"#000"}
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard={"Amount"}
          Children={
            <View style={styles.center}>
              <Text style={styles.amountText}>Amount</Text>
              <View style={styles.inputAmountWrapper}>
                <Text style={{ fontSize: 25 }}>{`${
                  params.type === "Expense" || params.type === "debts"
                    ? "-"
                    : "+"
                }`}</Text>
                <TextInput
                  style={styles.inputAmount}
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>
              <View style={styles.underLine} />
            </View>
          }
        />
        {/* Date picker */}
        <Pressable
          style={[styles.buttonContainer]}
          onPress={() => setShowPicker1(!showPicker1)}
        >
          <IconWrapper
            iconType="calendar"
            size={24}
            colorIcon="#000"
            bgColor={"#fff"}
            className={{
              borderWidth: 1,
              borderColor: COLORS.buttonBg,
            }}
            LibIcon={AntDesign}
          />
          <Text>Date</Text>
          <Text style={styles.dateTitle}>
            {date1 ? date1.toDateString() : ""}
          </Text>
        </Pressable>
        {showPicker1 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date1 || new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleOnChangeDate1}
          />
        )}
        {/* Pay options || RepaidDate */}
        {checkDOR ? (
          <Pressable
            style={[styles.buttonContainer]}
            onPress={() => setShowPicker2(!showPicker2)}
          >
            <IconWrapper
              iconType="calendar"
              size={24}
              colorIcon="#000"
              bgColor={"#fff"}
              className={{
                borderWidth: 1,
                borderColor: COLORS.buttonBg,
              }}
              LibIcon={AntDesign}
            />
            {params.type === "Debt" ? (
              <Text>Repaid Date</Text>
            ) : (
              <Text>Complete Date</Text>
            )}

            <Text style={styles.dateTitle}>
              {date2 ? date2.toDateString() : ""}
            </Text>
          </Pressable>
        ) : (
          <Select
            iconType="database"
            inputStyle={{ width: "90%", backgroundColor: "white" }}
            nameCard={
              data[selectedIndex] ? data[selectedIndex] : "Select method"
            }
            data={data}
            chidren={
              <View style={styles.optionSelectWrapper}>
                {data.map((value, index) => (
                  <TouchableOpacity
                    style={[
                      { width: "100%", marginBottom: 10 },
                      index === selectedIndex
                        ? {
                            backgroundColor: COLORS.mainLightBackground,
                          }
                        : {
                            backgroundColor: COLORS.gray,
                          },
                      index === 0 && {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      index === data.length - 1 && {
                        marginBottom: 0,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                    ]}
                    key={index}
                    onPress={() => setSelectedIndex(index)}
                  >
                    <Text style={styles.option}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            }
          />
        )}
        {checkDOR && showPicker2 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date2 || new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleOnChangeDate2}
          />
        )}

        {/* Category options */}
        {checkDOR ? (
          <View style={styles.DORinputWrapper}>
            <IconWrapper
              iconType={"person"}
              size={SIZES.xLarge}
              LibIcon={FontAwesome6}
              className={styles.DORicon}
            />
            <TextInput
              style={styles.DORinput}
              placeholder={
                params.type === "Debt"
                  ? "Lender (Who lend you money?)"
                  : "Borrower (Who you lend money?)"
              }
              placeholderTextColor="grey"
              numberOfLines={1}
              value={lender}
              onChangeText={setLender}
            />
          </View>
        ) : (
          <Select
            iconType="book"
            inputStyle={{ width: "90%", backgroundColor: "white" }}
            nameCard={
              data1[categoryIdx] ? data1[categoryIdx] : "Select category"
            }
            data={data1}
            chidren={
              <View style={styles.optionSelectWrapper}>
                {data1.map((value, index) => (
                  <TouchableOpacity
                    style={[
                      { width: "100%", marginBottom: 10 },
                      index === categoryIdx
                        ? {
                            backgroundColor: COLORS.mainLightBackground,
                          }
                        : {
                            backgroundColor: COLORS.gray,
                          },
                      index === 0 && {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      index === data1.length - 1 && {
                        marginBottom: 0,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                    ]}
                    key={index}
                    onPress={() => setCategoryIdx(index)}
                  >
                    <Text style={styles.option}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            }
          />
        )}

        <Toggle
          iconType={"message-circle"}
          colorIcon={"#000"}
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard={"Add notes"}
          Children={
            <TextInput
              style={styles.textArea}
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={5}
              multiline={true}
              value={notes}
              onChangeText={setNotes}
            />
          }
        />
        <Button onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
};
export default TransactionScreen;
