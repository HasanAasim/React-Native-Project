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
        <Image
          source={require("../assets/music-logo-solid.png")}
          style={styles.img}
        />

        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. ficia
          deserunt mollit anim id est laborum.
        </Text>

        <Button title="Sign In" />
        <Button title="Sign Up" />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  txt: {
    color: "white",
    padding: 20,
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
