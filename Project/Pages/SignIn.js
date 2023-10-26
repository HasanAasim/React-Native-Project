import React from "react";
import {
  Button,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Button title="back icon" />

      <Text style={styles.txt}>Welcome!</Text>

      <Text style={styles.txt}>Sign In Page</Text>
      <Text style={styles.txt}>Or Sigin with</Text>

      <ImageBackground
        source={require("../assets/email-icon.png")}
        style={styles.inputBackground}
      >
        <TextInput style={styles.txtinput} placeholder="enter your email" />
      </ImageBackground>

      <TextInput
        style={styles.txtinput}
        placeholder="enter your password"
        secureTextEntry={true}
      />

      <Button title="Sign In" />

      <Text style={styles.txt}> - OR - </Text>
      <Text style={styles.txt}> Sign in With </Text>

      <Button title="facebook" />
      <Button title="google" />
      <Text style={styles.txt}>
        Don't Have An Account?
        <Text>Sign Up</Text>
        {/* /open to sign up page */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373F45",
    justifyContent: "center",
  },
  txt: {
    color: "white",
  },
  txtinput: {
    flex: 1,
    margin: 20,
    backgroundColor: "#50575C",
  },
  inputBackground: {
    width: 10,
    height: 20,
    padding: 10,
  },
});
