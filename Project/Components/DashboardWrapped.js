import { Text, View, StyleSheet, Image } from "react-native";

export default function DashboardWrapped() {
  return (
    <View>

      <View
        style={{
          borderColor: "#414348",
          borderRadius: 17,
          backgroundColor: "#414348",
        }}
      >
        <Image
          source={require("../assets/summary-icon.png")}
          style={{ width: 80, height: 80, margin: 10 }}
        />

        <View>
          <Text style={styles.Text}>SEE WHO YOU LISTENED TO IN 2020</Text>
          <Text style={styles.Text}>
            Your Top artists and songs of the year and more
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "white",
    margin: 15,
  },
});
