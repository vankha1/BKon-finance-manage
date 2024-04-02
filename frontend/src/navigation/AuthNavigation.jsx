import { createStackNavigator } from "@react-navigation/stack";
 
import LoginScreen from "../screens/Login/LoginScreen";
import SignupScreen from "../screens/Signup/SignupScreen";
import TabNavigator from "./TabNavigation";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="MainStack" component={TabNavigator}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;