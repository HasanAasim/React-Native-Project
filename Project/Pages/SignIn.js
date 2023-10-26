import React from "react";
import {
  Button,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>ahshasd</Text>
        <Text>ahshasd</Text>
        <Text>ahshasd</Text>
        <Text>ahshasd</Text>
        <Text>ahshasd</Text>
        <Text>ahshasd</Text>
        <Button title="back icon" />

        <TextInput placeholder="enter your email" />
        <TextInput placeholder="enter your password" secureTextEntry={true} />

        <Text>SignIN Page</Text>
        <Button title="Sign In" />
        <Text>Or Sigin with</Text>
        <Button title="facebook" />
        <Button title="google" />
        <Text>
          Don't Have An Account?
          <Text>Sign Up</Text>
          {/* /open to sign up page */}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
