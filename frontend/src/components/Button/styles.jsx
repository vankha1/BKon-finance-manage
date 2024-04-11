import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        backgroundColor: COLORS.buttonBg,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    onPress: {
        backgroundColor: '#1daf58',
    },
    size: {
        width: '20%'
    }
})

export default styles
