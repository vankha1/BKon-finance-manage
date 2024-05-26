import { View, Text, ScrollView } from "react-native";
import DORitem from "../../components/DeptOrReItem/DORitem";
import { COLORS } from "../../constants";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";

const ListDORScreen = () => {
    const params = useRoute().params;
    //const navigator = useNavigation();
    //console.log(params.type);
    return (
        <View style={styles.container}>
            <Header title={`List of ${params.type}`} addButton={true} />
            <ScrollView>
                <View style={styles.contentContainer}>
                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Debt" : "Receivable"}
                        amount="$5000"
                        remaining="$1000"
                        date="20"
                        month="MAR"
                        year="2024"
                    />

                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Debt" : "Receivable"}
                        amount="$5000"
                        remaining="$1000"
                        date="20"
                        month="MAR"
                        year="2024"
                    />

                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Debt" : "Receivable"}
                        amount="$5000"
                        remaining="$1000"
                        date="20"
                        month="MAR"
                        year="2024"
                    />
                </View>
            </ScrollView>
        </View>
    );
};
export default ListDORScreen;
