import { MyThemeContext } from "@/contexts/theme";
import { Link } from "expo-router";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const {darkMode, setDarkMode} = useContext(MyThemeContext)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: !darkMode ? null : "#0f0f0f"
      }}
    >
      <Text style={{ color: !darkMode ? "#000000": "#ffffff" }}>This is my TodoListApp in ReactNative</Text>
      <Text style={{ color: !darkMode ? "#000000": "#ffffff"}}> dark mode is {darkMode + ""}</Text>
      <Link style={{ color: !darkMode ? "blue": "teal" }} href={"/settings"}>Go the settings</Link>
    </View>
  );
}
