import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./Pages/SplashScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SplashScreen />
    </View>
  );
}
