import { View, Text, Image } from "react-native"
import Button from "../../components/Button/Button"
import { useNavigation } from "@react-navigation/native";


const OnBoardingScreen = () => {

    const navigator = useNavigation()
    return (
        <View>
            <Image />

            <View>
                <Text>Tiết kiệm tiền cho vợ bạn</Text>
                <Text>Ứng dụng hỗ trợ các tính năng gợi ý chi tiêu để tiết kiệm thật tốt nguồn tiền và tiết kiệm tiền thì vợ vui</Text>
            </View>

            <Button 
                onPress={() => navigator.navigate("Onboarding2")}
            >
                <Text>Tiep tuc</Text>
            </Button>
        </View>
    )
}

export default OnBoardingScreen