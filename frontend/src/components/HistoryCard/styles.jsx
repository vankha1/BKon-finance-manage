import { StyleSheet } from "react-native"; 
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray2,
        paddingVertical: 10,
        borderRadius: 10,
        gap: 10
    },
    typeName: { 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    iconWrapper: {
        width: 45,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    textContent: {
        flex: 1,
        flexDirection: 'column'
    },
    typeBank: {
        fontSize: 13, 
    }
})

export default styles;