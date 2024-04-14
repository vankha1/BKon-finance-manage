import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import Select from "../../components/Select/Select";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";

const TransactionScreen = () => {
  const params = useRoute().params;
  const navigator = useNavigation();

  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const handleOnChangeDate = (e, selectedDate) => {
    if (e.type === "set") {
      const currentDate = selectedDate || date;
      console.log(currentDate, date);
      setDate(currentDate);
    }

    setShowPicker(false);
  };

  const data = [
    "Receive by cash",
    "Receive by bank accounts",
    "Receive by e-wallets",
    "Other",
  ];

  const data1 = ["Food and drink", "Shopping", "Refueling", "Others"];

  return (
    <ScrollView style={styles.container}>
      <Header title={`New ${params.type}`} />

      <View style={styles.content}>
        <Toggle
          iconType={"credit-card"}
          colorIcon={"#000"}
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard={params.type}
          Children={
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 10,
                }}
              >
                Amount
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40%",
                }}
              >
                <Text>{`${params.type === "Expense" ? "-" : "+"} `}</Text>
                <TextInput
                  style={{
                    width: "90%",
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                  }}
                  placeholder="Enter amount"
                  keyboardType="numeric"
                />
              </View>
              <View
                style={{
                  width: 140,
                  borderWidth: 2,
                  borderColor: COLORS.buttonBg,
                  backgroundColor: COLORS.buttonBg,
                }}
              ></View>
            </View>
          }
        />

        <Toggle
          iconType={"calendar"}
          colorIcon={"#000"}
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard={"Date"}
          onPress={() => setShowNotes(!showNotes)}
          Children={
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={handleOnChangeDate}
            />
          }
        />
        <View>
          <Text style={styles.dateTitle}>{date?.toLocaleString()}</Text>
        </View>

        <Select
          iconType="database"
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard="Select option"
          data={data}
        />

        <Select
          iconType="book"
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard="Select category"
          data={data1}
        />

        <Toggle
          iconType={"message-circle"}
          colorIcon={"#000"}
          inputStyle={{ width: "90%", backgroundColor: "white" }}
          nameCard={"Add notes"}
          Children={
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  padding: 20,
                  borderRadius: 10,
                  textAlignVertical: "top",
                  justifyContent: "flex-start",
                  backgroundColor: COLORS.gray3,
                }}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={5}
                multiline={true}
              />
            </View>
          }
        />

        <Button>
          <Text>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
};
export default TransactionScreen;
