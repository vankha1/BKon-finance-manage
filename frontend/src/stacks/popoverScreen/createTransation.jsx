import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import StatItem from "@/components/StatItem/StatItem";

const CreateTransaction = () => {
    const navigator = useNavigation();
    return (
        <View
            style={{
                position: "absolute",
                bottom: 100,
                left: 15,
                right: 15,
                //width: "90%",
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                flexDirection: "column",
                //flexWrap: "wrap",
                justifyContent: "flex-start",
                //paddingRight: -10,
                gap: 15,
                //height: 132,
                padding: 13,
                borderRadius: 10,
            }}
        >
            <View
                style={{
                    position: "absolute",
                    bottom: -34,
                    left: 9,
                    //right: -8,
                    borderLeftWidth: 156,
                    borderLeftColor: "transparent",
                    borderRightWidth: 156,
                    borderRightColor: "transparent",
                    borderTopWidth: 34,
                    borderTopColor: "rgba(52, 52, 52, 0.8)",
                    backgroundColor: "transparent",
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName={"bitcoin"}
                    titleReport={"Expense"}
                    className={{
                        width: "45%",
                        backgroundColor: "white",
                        paddingVertical: 10,
                        //paddingHorizontal: 5,
                        borderRadius: 16,
                    }}
                />
                <StatItem
                    LibIcon={Octicons}
                    iconName={"diff-added"}
                    titleReport={"Receivable"}
                    className={{
                        width: "45%",
                        backgroundColor: "white",
                        paddingVertical: 10,
                        //paddingHorizontal: 5,
                        borderRadius: 16,
                    }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <StatItem
                    LibIcon={AntDesign}
                    iconName={"minussquareo"}
                    titleReport={"Debt"}
                    className={{
                        width: "45%",
                        backgroundColor: "white",
                        paddingVertical: 10,
                        //paddingHorizontal: 5,
                        borderRadius: 16,
                    }}
                />
                <StatItem
                    LibIcon={MaterialCommunityIcons}
                    iconName={"wallet-outline"}
                    titleReport="Income"
                    className={{
                        width: "45%",
                        backgroundColor: "white",
                        paddingVertical: 10,
                        //paddingHorizontal: 5,
                        borderRadius: 16,
                    }}
                    onPress={() => {
                        navigator.navigate("Transaction", {
                            type: "Income",
                        });
                    }}
                />
            </View>
        </View>
    );
};
export default CreateTransaction;
