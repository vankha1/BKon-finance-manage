import { createStackNavigator } from "@react-navigation/stack";
 
import LoginScreen from "../screens/Login/LoginScreen";
import SignupScreen from "../screens/Signup/SignupScreen";
import TabNavigator from "./TabNavigation";
import OnBoardingScreen from "../screens/Onboading/OnboardingScreen";
import OnBoardingScreen2 from "../screens/Onboading/OnboardingScreen2";
import OnBoardingScreen3 from "../screens/Onboading/OnboardingScreen3";

const Stack = createStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Onboarding1" 
                component={OnBoardingScreen} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Onboarding2" 
                component={OnBoardingScreen2} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Onboarding3" 
                component={OnBoardingScreen3} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingStack}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="MainStack" component={TabNavigator}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;