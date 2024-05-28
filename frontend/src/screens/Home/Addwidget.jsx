import { Pressable, StyleSheet, Text, View } from "react-native";
import { ExpensePieChart } from "../Statistic/Expense/ExpenseStatScreen";
import { COLORS } from "@/constants";
export const Addwidget = ({ eventList, onShow }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                }}
                onPress={onShow}
            >
                <Pressable onPress={onShow}>
                    <ExpensePieChart></ExpensePieChart>
                </Pressable>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        //zIndex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 250,
        backgroundColor: "rgba(0,0,0,0.7)",
        gap: 26,
    },
});
