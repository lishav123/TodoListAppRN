import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is my TodoListApp in ReactNative</Text>
      <Link href={"/settings"}>Go the settings</Link>
    </View>
  );
}
