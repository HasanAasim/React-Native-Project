import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("../assets/gradient.png")}
        style={styles.imageBackground}
      >
        <Image
          source={require("../assets/music-logo-solid.png")}
          style={styles.img}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
});
