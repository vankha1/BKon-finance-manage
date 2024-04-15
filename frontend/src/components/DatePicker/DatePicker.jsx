import { View, Text, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import IconWrapper from "../Icon/Icon";
import { useState } from "react";
import { COLORS } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const DatePicker = ({ containerStyle, inputStyle }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(null);
  const handleOnChangeDate = (e, selectedDate) => {
    if (e.type === "set") {
      const currentDate = selectedDate || date;
      console.log(currentDate, date);
      setDate(currentDate);
    }

    setShowPicker(false);
  };
  return (
    <>
      <Pressable
        style={[styles.buttonContainer, containerStyle]}
        onPress={() => setShowPicker(!showPicker)}
      >
        <IconWrapper
          iconType="calendar"
          size={24}
          colorIcon="#000"
          bgColor={"#fff"}
          className={{
            borderWidth: 1,
            borderColor: COLORS.buttonBg,
            ...inputStyle,
          }}
          LibIcon={AntDesign}
        />
        <Text>Date</Text>
        <Text style={styles.dateTitle}>{date ? date.toDateString() : ""}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleOnChangeDate}
        />
      )}
    </>
  );
};
export default DatePicker;
