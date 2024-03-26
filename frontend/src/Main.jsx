import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigation";

const Main = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default Main;
