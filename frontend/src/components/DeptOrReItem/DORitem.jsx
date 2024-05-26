import { View, Text } from "react-native";
import IconWrapper from "../Icon/Icon";
import ProgressCard from "../ProgressCard/ProgressCard";
import * as Progress from "react-native-progress";
import { COLORS } from "../../constants";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
const DORitem = ({
    note,
    type,
    amount,
    remaining,
    date,
    month,
    year,
    time,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconWrapper
                    iconType={"dollar"}
                    LibIcon={FontAwesome}
                    size={30}
                />
                <Text>{note}</Text>
                <Text> </Text>
            </View>
            <View style={styles.mainContent}>
                <Text>{type}</Text>
                <Text>{amount}</Text>
            </View>
            <View style={styles.mainContent}>
                <Text>Remaining</Text>
                <Text>{remaining}</Text>
            </View>
            <View style={styles.progressBar}>
                <Progress.Bar
                    progress={4 / 5}
                    //width={220}
                    height={4}
                    width={265}
                    borderWidth={0}
                    unfilledColor={COLORS.gray3}
                    color={COLORS.buttonBg}
                />
            </View>

            <View style={styles.description}>
                <Text>
                    Created on {date} {month} {year} {time}
                </Text>
            </View>
        </View>
    );
};
export default DORitem;
