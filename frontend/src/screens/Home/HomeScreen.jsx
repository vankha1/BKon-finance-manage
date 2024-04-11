import {MaterialCommunityIcons,AntDesign,Octicons} from '@expo/vector-icons'
import { View, Text } from 'react-native'
import styles from './styles'
import { COLORS, SIZES } from '../../constants'
import * as Progress from 'react-native-progress';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardWith2Elements}>
          <Text>Cash</Text>
          <Text>8,100$</Text>
        </View>
        <View style={styles.cardWith2Elements }>
          <Text style={{paddingLeft:30}}>Bank card</Text>
          <Text style={{fontSize:SIZES.xSmall, paddingLeft:30}}>Not available</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardEleWithIcon_Left}>  
          <View style={styles.iconContainer}>
          <AntDesign name="creditcard" size={SIZES.xLarge} color={"#000"}/>
          </View>
        </View>
        <View style={styles.cardEleWithIcon_Right}>
          <Text style={{fontSize:SIZES.small}}>Monthly Budget</Text>
          <Text >$8,100</Text>
          <Progress.Bar progress={5/8.1} width={220} height={4} borderWidth={0} unfilledColor={COLORS.gray3} color={COLORS.buttonBg}/>
          <View style={styles.belowBarProgress}>
            <Text style={{fontSize:SIZES.xSmall}}>spent: $5,000</Text>
            <Text style={{fontSize:SIZES.xSmall}}>left: $3,100</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardEleWithIcon_Left}>  
          <View style={styles.iconContainer}>
          <Octicons name="diff-added" size={SIZES.xLarge} color={"#000"}/>
          </View>
        </View>
        <View style={styles.cardEleWithIcon_Right}>
          <Text style={{fontSize:SIZES.small}}>Receivable</Text>
          <Text >$8,100</Text>
          <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'flex-end',
            alignItems:'center',
            paddingRight:29,
          }}>
            <Text style={{fontSize:SIZES.xSmall}}>8,100/15,000</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default HomeScreen