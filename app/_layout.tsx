import { Stack } from "expo-router";
import Colors from "../assets/style/cores";
import { View, StyleSheet } from "react-native";


export default function RootLayout() {

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AzulPetroleo,
  },
});