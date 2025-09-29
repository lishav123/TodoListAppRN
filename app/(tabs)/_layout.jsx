import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={
            { 
                title: "Home", 
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={'home'}
                        color={color}
                        size={24}
                    />
                ),
          }
        }></Tabs.Screen>
        <Tabs.Screen name="settings" options={
            { 
                title: "Settings", 
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={'settings'}
                        color={color}
                        size={24}
                    />
                ),
          }
        }></Tabs.Screen>
    </Tabs>
}
