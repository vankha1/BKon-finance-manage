import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigation";
import AuthNavigator from "./navigation/AuthNavigation";

const Main = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default Main;
