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

import styles from "./styles";
import { COLORS, SIZES } from "@/constants";
import Select from "@/components/Select/Select";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Toggle from "@/components/Toggle/Toggle";
import IconWrapper from "@/components/Icon/Icon";
import { addDebt } from "@/redux/slice/debts";
import { categories, convertNumber } from "@/utils";
import {
  createTransaction,
  deleteTransaction,
  getResources,
  updateTransaction,
} from "@/services";
import { toggleEvent } from "@/redux/slice/transactions";
import { LocalizationKey, i18n } from "@/localization";

const getType = (type) => {
  if (type === "Debt") return "debts";
  return "receivables";
};

const TransactionScreen = () => {
  const params = useRoute().params;
  console.log("params: ", params);
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
  const { isChanged } = useSelector((state) => state.transaction);
  const localeState = useSelector((state) => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale;
  }, []);
  const handleOnChangeDate = (setDate, setShowPicker) => (e, selectedDate) => {
    if (e.type === "set") {
      const currentDate = selectedDate || new Date();
      console.log(currentDate);
      setDate(currentDate);
    }

    setShowPicker(false);
  };

  useEffect(() => {
    const getMethods = async () => {
      const response = await getResources();
      setMethods(response);
    };
    getMethods();
  }, [listDebts]);

  const handleSave1 = async () => {
    const data = {
      amount: +amount,
      [checkDOR ? "borrowDate" : "tradedDate"]: date1.toISOString(),
      note: notes,
    };

    if (checkDOR) {
      data["repaidDate"] = date2.toISOString();
      data["lenderName"] = lender;
    } else {
      data["spendOn"] = categories[categoryIdx];
      data["cashId"] = methods[selectedIndex]._id.toString();
    }
    console.log(data);

    const transactionType = !checkDOR ? params.type : getType(params.type);
    //console.log("transaction type", transactionType);
    const response = await createTransaction(transactionType, data);
    dispatch(toggleEvent({ value: !isChanged }));
    dispatch(addDebt({ value: !listDebts }));
    navigator.goBack();
  };

  const handleSave2 = async () => {
    const newRemaining = params.amountInfo.remaining - +amount;
    const currentType = params.name === "debt" ? "debts" : "receivables";
    const updateData =
      params.name === "debt"
        ? { paid: params.amountInfo.amount - newRemaining }
        : { received: params.amountInfo.amount - newRemaining };

    console.log("newRemaining: ", newRemaining);
    console.log("updateData: ", updateData);
    console.log("currentType: ", currentType);
    console.log("id", params.id);

    newRemaining < 0
      ? alert("Amount is greater than remaining")
      : newRemaining == 0
      ? await deleteTransaction(currentType, params.id)
      : await updateTransaction(currentType, params.id, updateData);

    dispatch(toggleEvent({ value: !isChanged }));
    dispatch(addDebt({ value: !listDebts }));
    navigator.goBack();
  };

  return (
    <>
      {params.type === "Paying" ? (
        <Header
          title={
            params.name === "debt"
              ? i18n.t(LocalizationKey.PAYING_DEBT)
              : i18n.t(LocalizationKey.TAKING_RECEIVABLE)
          }
        />
      ) : (
        <Header
          title={
            params.type === "Receivable"
              ? i18n.t(LocalizationKey.NEW_RECEIVABLE)
              : params.type === "Debt"
              ? i18n.t(LocalizationKey.NEW_DEBT)
              : params.type === "incomes"
              ? i18n.t(LocalizationKey.NEW_INCOME)
              : i18n.t(LocalizationKey.NEW_EXPENSE)
          }
        />
      )}
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <>
            {params.type === "Paying" ? (
              <View style={styles.remaining}>
                <Text style={styles.contentText}>
                  {i18n.t(LocalizationKey.REMAINING)}
                </Text>
                <Text style={[styles.amountText, { color: "red" }]}>
                  {convertNumber(params.amountInfo.remaining)}
                </Text>
              </View>
            ) : (
              ""
            )}
            <View style={styles.center}>
              <Text style={styles.amountText}>
                {i18n.t(LocalizationKey.AMOUNT)}
              </Text>
              <View style={styles.inputAmountWrapper}>
                <Text>
                  {params.name === "debt" || params.type === "Receivable" ? (
                    <IconWrapper
                      iconType={"minus"}
                      size={SIZES.medium}
                      LibIcon={AntDesign}
                    />
                  ) : (
                    <IconWrapper
                      iconType={"plus"}
                      size={SIZES.medium}
                      LibIcon={AntDesign}
                    />
                  )}{" "}
                </Text>
                <TextInput
                  style={styles.inputAmount}
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="Enter amount"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.underLine} />
            </View>
          </>

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
              {date1
                ? date1.toDateString()
                : i18n.t(LocalizationKey.CREATE_DATE)}
            </Text>
          </Pressable>
          {showPicker1 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date1 || new Date()}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleOnChangeDate(setDate1, setShowPicker1)}
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
                  : params.type === "Debt"
                  ? i18n.t(LocalizationKey.REPAID_DATE)
                  : i18n.t(LocalizationKey.COMPLETE_DATE)}
              </Text>
            </Pressable>
          ) : (
            <Select
              onPress={() => {}}
              iconType="database"
              inputStyle={{ width: "90%", backgroundColor: "white" }}
              nameCard={
                methods[selectedIndex]?.name
                  ? methods[selectedIndex]?.name
                  : i18n.t(LocalizationKey.SELECT_METHOD)
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
              onChange={handleOnChangeDate(setDate2, setShowPicker2)}
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
                    ? `${i18n.t(LocalizationKey.LENDER)} (${i18n.t(
                        LocalizationKey.WHOLENDYOUMONEY
                      )})`
                    : `${i18n.t(LocalizationKey.BORROWER)} (${i18n.t(
                        LocalizationKey.WHODIDYOULENDMONEY
                      )})`
                }
                placeholderTextColor="grey"
                numberOfLines={1}
                value={lender}
                onChangeText={setLender}
              />
            </View>
          ) : (
            <Select
              onPress={() => {}}
              iconType="book"
              inputStyle={{ width: "90%", backgroundColor: "white" }}
              nameCard={
                categories[categoryIdx]
                  ? categories[categoryIdx]
                  : i18n.t(LocalizationKey.SELECT_CATEGORY)
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
                      onPress={() => {
                        setCategoryIdx(index);
                      }}
                    >
                      <Text style={styles.option}>{value}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              }
            />
          )}

          <Toggle
            onPress={() => {}}
            iconType={"message-circle"}
            colorIcon={"#000"}
            inputStyle={{ width: "90%", backgroundColor: "white" }}
            nameCard={i18n.t(LocalizationKey.ADDNOTE)}
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
          <Button
            onPress={params.type === "Paying" ? handleSave2 : handleSave1}
          >
            <Text style={styles.buttonText}>
              {i18n.t(LocalizationKey.SAVE)}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};
export default TransactionScreen;
