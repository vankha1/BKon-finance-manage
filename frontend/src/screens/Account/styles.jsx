import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'

var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height
const styles = StyleSheet.create({
    container: {
        width: maxWidth,
        height: maxHeight,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        backgroundColor: COLORS.mainLightBackground
    },
    header: {
        marginTop: 20,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 38,
        color: COLORS.gray2
    },
    cardList: {
        width: maxWidth,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        marginTop: 20
    }
})

export default styles