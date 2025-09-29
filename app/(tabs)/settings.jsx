import { MyThemeContext } from "@/contexts/theme";
import { useContext, useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function Settings() {
    const [active, setActive] = useState(false)
    const {darkMode, setDarkMode} = useContext(MyThemeContext)


    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: !darkMode ? null : "#0f0f0f"}}>
        <Text style={{ color: !darkMode ? "#000000": "#ffffff" }}>This is the setting page (on the darkmode via the switch)</Text>
        <Switch style={{transform: [{ scale: 1.5 }]}} value={active} onChange={() => { 
            setActive(!active);
            setDarkMode(!darkMode); 
        }}/>
    </View>
}