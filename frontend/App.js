import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import AppLoading from "expo-app-loading";
import * as Localization from "expo-localization";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import Main from "./src/Main";
import { Language, i18n } from "./src/localization";
import store from "./src/redux/store";
import { en, vi } from "./src/localization/languages";
//hehehehehheeheh
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;
i18n.translations = { en, vi };

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
