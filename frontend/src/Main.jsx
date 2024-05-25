import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigation";
import AuthNavigator from "./navigation/AuthNavigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { i18n } from "./localization";

const Main = () => {
  const isLoggedIn = true; // change to false if want to logout

  const localeState = useSelector(state => state.locale);

  useEffect(() => {
    i18n.locale = localeState.locale
  }, [])

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default Main;
