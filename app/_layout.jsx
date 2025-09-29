import { MyThemeContext } from "@/contexts/theme";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  return <MyThemeContext value={ {darkMode, setDarkMode} }>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)"></Stack.Screen>
    </Stack>
  </MyThemeContext>;
}
