import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    AntDesign,
    Feather,
    FontAwesome6,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import Select from "../../components/Select/Select";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import IconWrapper from "../../components/Icon/Icon";

const TransactionScreen = () => {
    const params = useRoute().params;
    const [showPicker1, setShowPicker1] = useState(false);
    const [showPicker2, setShowPicker2] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [categoryIdx, setCategoryIdx] = useState(null);

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
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
                                    fontSize: 16,
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
                                <Text style={{ fontSize: 25 }}>{`${
                                    params.type === "Expense" ||
                                    params.type === "Debt"
                                        ? "-"
                                        : "+"
                                }`}</Text>
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
                {params.type === "Debt" || params.type === "Receivable" ? (
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
                            data[selectedIndex]
                                ? data[selectedIndex]
                                : "Select method"
                        }
                        data={data}
                        chidren={
                            <View
                                style={{
                                    marginTop: 10,
                                    backgroundColor: COLORS.gray3,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: COLORS.gray3,
                                    overflow: "scroll",
                                }}
                            >
                                {data.map((value, index) => (
                                    <TouchableOpacity
                                        style={[
                                            { width: "100%", marginBottom: 10 },
                                            index === selectedIndex
                                                ? {
                                                      backgroundColor:
                                                          COLORS.mainLightBackground,
                                                  }
                                                : {
                                                      backgroundColor:
                                                          COLORS.gray,
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
                                        <Text style={styles.option}>
                                            {value}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }
                    />
                )}
                {(params.type === "Debt" || params.type === "Receivable") &&
                    showPicker2 && (
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
                {params.type === "Debt" || params.type === "Receivable" ? (
                    <View
                        style={{
                            width: "90%",
                            flexDirection: "row",
                            backgroundColor: "white",
                            alignItems: "center",
                            borderRadius: 20,
                        }}
                    >
                        <IconWrapper
                            iconType={"person"}
                            size={SIZES.xLarge}
                            LibIcon={FontAwesome6}
                            //haveBorder={true}
                            // borderSize={"small"}
                            className={{
                                borderWidth: 1,
                                borderColor: COLORS.buttonBg,
                                borderRadius: 30,
                                width: 45,
                                height: 45,
                                marginLeft: 10,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                        <TextInput
                            style={{
                                //width: Dimensions.get("window").width * 0.9,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 20,
                                paddingBottom: 20,
                                borderRadius: 10,
                                textAlignVertical: "top",
                                backgroundColor: "white",
                                fontSize: 16,
                                flex: 1,
                            }}
                            placeholder={
                                params.type === "Debt"
                                    ? "Lender (Who lend you money?)"
                                    : "Borrower (Who you lend money?)"
                            }
                            placeholderTextColor="grey"
                            numberOfLines={1}
                            //multiline={true}
                        />
                    </View>
                ) : (
                    <Select
                        iconType="book"
                        inputStyle={{ width: "90%", backgroundColor: "white" }}
                        nameCard={
                            data1[categoryIdx]
                                ? data1[categoryIdx]
                                : "Select category"
                        }
                        data={data1}
                        chidren={
                            <View
                                style={{
                                    marginTop: 10,
                                    backgroundColor: COLORS.gray3,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: COLORS.gray3,
                                    overflow: "scroll",
                                }}
                            >
                                {data1.map((value, index) => (
                                    <TouchableOpacity
                                        style={[
                                            { width: "100%", marginBottom: 10 },
                                            index === categoryIdx
                                                ? {
                                                      backgroundColor:
                                                          COLORS.mainLightBackground,
                                                  }
                                                : {
                                                      backgroundColor:
                                                          COLORS.gray,
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
                                        <Text style={styles.option}>
                                            {value}
                                        </Text>
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
                            style={{
                                width: Dimensions.get("window").width * 0.9,
                                padding: 20,
                                borderRadius: 10,
                                textAlignVertical: "top",
                                backgroundColor: COLORS.gray,
                                fontSize: 16,
                            }}
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={5}
                            multiline={true}
                        />
                    }
                />
                <Button>
                    <Text
                        style={{
                            fontSize: 18,
                            color: COLORS.white,
                            fontWeight: "bold",
                        }}
                    >
                        Save
                    </Text>
                </Button>
            </View>
        </ScrollView>
    );
};
export default TransactionScreen;
