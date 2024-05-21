import { createStackNavigator } from "@react-navigation/stack";
import CreateTransaction from "./popoverScreen/createTransation";

const Stack = createStackNavigator();
export const CreateTransactionStack = () => {
    return (
        <Stack.Navigator initialRouteName="CreateTransaction">
            <Stack.Screen
                name="CreateTransaction"
                component={CreateTransaction}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
