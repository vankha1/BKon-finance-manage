import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderRadius: 20
    },  
    selectInput: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        gap: 10,
      },
    cardContent: {
        width: 250,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    infoTitle: {
        fontSize: 18,
        color: COLORS.gray2
    },
    infoText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    bankImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    selectOption: {
        width: "100%",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "start",
        alignItems: "center",
        borderRadius: 5,
      },
})

export default styles