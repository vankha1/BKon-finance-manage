import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const cardWidth = 309
const iconSideWidth = 60
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 26,
        backgroundColor: COLORS.mainLightBackground,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    card:{
        borderRadius:20,
        backgroundColor:'#fff',
        width:cardWidth,
        flexDirection:'row',
        height:97
    },
    cardWith2Elements:{
        width:'50%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'left',
        paddingLeft:30,
        gap:20,
        fontSize: SIZES.medium
    },
    cardEleWithIcon_Left:{
        width:iconSideWidth,
        justifyContent:'center',
        alignItems:'center',
       
    },
    cardEleWithIcon_Right:{
        width:cardWidth-iconSideWidth,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        gap:6,
        paddingTop:10,
    },
    belowBarProgress:{
        width:cardWidth-iconSideWidth,
        fontSize: SIZES.xSmall,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:20,
        paddingRight:29
        
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        width:45,
        height:45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.buttonBg,
    }
    
})

export default styles