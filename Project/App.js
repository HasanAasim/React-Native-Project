import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Access from "./Pages/Access";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Access /> */}
      {/* <SignIn/> */}
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
