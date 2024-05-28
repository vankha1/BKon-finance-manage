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
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { COLORS, SIZES } from "../../constants";
import Select from "../../components/Select/Select";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import IconWrapper from "../../components/Icon/Icon";
import axios from "axios";
import { Config } from "../../config";
import { addDebt } from "../../redux/slice/debts";
import { categories } from "../../utils";
import { createTransaction, getResources } from "../../services";

const getType = (type) => {
  if (type === "Debt") return "debts";
  return "receivables";
};

const TransactionScreen = () => {
  const params = useRoute().params;
  console.log(params);
  const navigator = useNavigation();
  const checkDOR = params.type === "Debt" || params.type === "Receivable";
  const dispatch = useDispatch();

  //   console.log(getType(params.type))

  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categoryIdx, setCategoryIdx] = useState(null);

  const [amount, setAmount] = useState("");
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [lender, setLender] = useState("");
  const [notes, setNotes] = useState("");

  const [methods, setMethods] = useState([]);

  const { listDebts } = useSelector((state) => state.debt);

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

  useEffect(() => {
    const getMethods = async () => {
      const response = await getResources();
      setMethods(response);
    };
    getMethods();
  }, [listDebts]);

  const handleSave = async () => {
    const data = {
      amount: +amount,
      [checkDOR ? "borrowDate" : "createdAt"]: date1.toISOString(),
      note: notes,
    };

    if (checkDOR) {
      data["repaidDate"] = date2.toISOString();
      data["lenderName"] = lender;
    } else {
      data["spendOn"] = categories[categoryIdx];
      data["cashId"] = methods[selectedIndex]._id.toString();
    }
    // console.log(data);

    const transactionType = !checkDOR ? params.type : getType(params.type);
    // console.log("transaction type", transactionType);
    const response = await createTransaction(transactionType, data);
    dispatch(addDebt({ value: !listDebts }));
    navigator.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      {params.type === "Paying" ? (
        <Header title={`Paying ${params.name}`} />
      ) : (
        <Header title={`New ${params.type.toLowerCase()}`} />
      )}

      <View style={styles.content}>
        {params.type === "Paying" ? (
          <View>
            <View style={styles.remaining}>
              <Text style={styles.contentText}>Remaining</Text>
              <Text style={styles.amountText}>$5000</Text>
            </View>
            <View style={styles.amount}>
              <Text style={styles.smallText}>Amount</Text>
              <View style={styles.blankAmount}>
                <Text>
                  {params.name === "debt" ? (
                    <IconWrapper
                      iconType={"minus"}
                      size={SIZES.xLarge}
                      LibIcon={AntDesign}
                    />
                  ) : (
                    <IconWrapper
                      iconType={"plus"}
                      size={SIZES.xLarge}
                      LibIcon={AntDesign}
                    />
                  )}{" "}
                </Text>
                <Text style={styles.amountText}>$4000</Text>
              </View>
              <View style={styles.underLine} />
            </View>
          </View>
        ) : (
          <Toggle
            iconType={"credit-card"}
            colorIcon={"#000"}
            inputStyle={{ width: "90%", backgroundColor: "white" }}
            nameCard={params.type}
            Children={
              <View style={styles.center}>
                <Text style={styles.amountText}>Amount</Text>
                <View style={styles.inputAmountWrapper}>
                  <Text style={{ fontSize: 25 }}>{`${
                    params.type === "Expense" || params.type === "Debt"
                      ? "-"
                      : "+"
                  }`}</Text>
                  <TextInput
                    value={amount}
                    onChangeText={setAmount}
                    style={styles.inputAmount}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.underLine} />
              </View>
            }
          />
        )}
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
          <Text style={date1 ? styles.dateTitle : styles.contentText}>
            {date1 ? date1.toDateString() : "Created Date"}
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
            <Text style={date2 ? styles.dateTitle : styles.contentText}>
              {date2
                ? date2.toDateString()
                : `${params.type === "Debt" ? "Repaid Date" : "Complete Date"}`}
            </Text>
          </Pressable>
        ) : (
          <Select
            iconType="database"
            inputStyle={{ width: "90%", backgroundColor: "white" }}
            nameCard={
              methods[selectedIndex]?.name
                ? methods[selectedIndex]?.name
                : "Select method"
            }
            data={methods}
            chidren={
              <View style={styles.optionSelectWrapper}>
                {methods.map((value, index) => (
                  <TouchableOpacity
                    style={[
                      { width: "100%", marginBottom: 2 },
                      index === selectedIndex
                        ? styles.selectedOption
                        : styles.unSelectedOption,
                      index === 0 && styles.firstOptionSelect,
                      index === methods.length - 1 && styles.lastOptionSelect,
                    ]}
                    key={index}
                    onPress={() => setSelectedIndex(index)}
                  >
                    <Text style={styles.option}>{value.name}</Text>
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
              categories[categoryIdx]
                ? categories[categoryIdx]
                : "Select category"
            }
            data={categories}
            chidren={
              <View style={styles.optionSelectWrapper}>
                {categories.map((value, index) => (
                  <TouchableOpacity
                    style={[
                      { width: "100%", marginBottom: 2 },
                      index === categoryIdx
                        ? styles.selectedOption
                        : styles.unSelectedOption,
                      index === 0 && styles.firstOptionSelect,
                      index === categories.length - 1 &&
                        styles.lastOptionSelect,
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
