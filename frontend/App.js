import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Main from "./src/Main";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if(!fontsLoaded) return <AppLoading />;
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
