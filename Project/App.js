import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./Pages/SplashScreen";
import Access from "./Pages/Access";
import SignIn from "./Pages/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SplashScreen /> */}
      {/* <Access /> */}
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
