import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

const Access = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <Button title="Sign In" />
      <Button title="Sign Up" />
      <Text>Wow Apple</Text>
    </View>
  );
};

export default Access;
