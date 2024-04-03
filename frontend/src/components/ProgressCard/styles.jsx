import { StyleSheet } from "react-native"; 
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    progressContent: {
        flex: 1,
        flexDirection: 'column'
    }
})

export default styles;