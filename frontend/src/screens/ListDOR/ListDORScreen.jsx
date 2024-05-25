import { View, Text, ScrollView } from "react-native";
import DORitem from "../../components/DeptOrReItem/DORitem";
import { COLORS } from "../../constants";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { useRoute } from "@react-navigation/native";

const ListDORScreen = () => {
    const params = useRoute().params;
    return (
        <View style={styles.container}>
            <Header title={`Lists of ${params.type}`} addButton={true} />
            <ScrollView>
                <View style={styles.contentContainer}>
                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Dept" : "Receivable"}
                        amount="$5000"
                        remaining="$1000"
                        date="20"
                        month="MAR"
                        year="2024"
                    />

                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Dept" : "Receivable"}
                        amount="$5000"
                        remaining="$1000"
                        date="20"
                        month="MAR"
                        year="2024"
                    />

                    <DORitem
                        note="Text Notation"
                        type={params.type === "debts" ? "Dept" : "Receivable"}
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
