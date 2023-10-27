import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function Access() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/acess.png")}
        style={styles.imageBackground}
      >
        <View style={{ position: "absolute" }}>
          <Image
            source={require("../assets/music-logo-solid.png")}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </View>
        <View>
          <Button title="Sign In" />
          <Button title="Sign Up" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "auto",
  },

  imageBackground: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    opacity: 1,
  },
  txt: {
    color: "white",
    // padding: 20,
    textAlign: "center",
    letterSpacing: 0.7,
    paddingTop: 40,
    padding: (0, 0, 70),
    marginTop: 330,
  },

  img: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    // height:,
    width: 200,
    resizeMode: "contain",
    // marginTop: 100,
  },
});
