import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

const SignUp = () => {
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

        <Text>First Name*</Text>
        <TextInput placeholder="First Name" />

        <Text>Last Name*</Text>
        <TextInput placeholder="Last Name" />

        <Text>Phone</Text>
        <TextInput placeholder="Enter Your Phone Number" />

        <Text>Email</Text>
        <TextInput placeholder="Enter Your Email" />

        <Text>Password</Text>
        <TextInput placeholder="*********" secureTextEntry={true} />

        <Button title="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
