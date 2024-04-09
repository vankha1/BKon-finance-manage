import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    image: {
        width: 330,
        height: 330,
    },
    textWrapper: {
        marginVertical: 10,
        paddingHorizontal: 15
    },  
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },
    text: {
        fontSize: 16,
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }, 
    dotNavigatorWrapper: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
    },  
    dotNavigator: {

    }
})

export default styles