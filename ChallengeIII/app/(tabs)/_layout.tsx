import { useFonts } from "expo-font";
import { Tabs } from 'expo-router';

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {

  const [fontsLoaded] = useFonts({
    "Source Sans Pro": require("../../assets/fonts/SourceSansPro.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'flex',
          width: '100%',
          height: 84,
          left: -1,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0.549,
          paddingLeft: 0.805,
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          backgroundColor: "#FFFFFF",
        },
        tabBarActiveTintColor: "#418B64",
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={30} color={color} />,
          tabBarLabelStyle: { 
            width: 40,
            height: 14,
            top: -12,
            fontFamily: "Source Sans Pro",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 14,
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite-border" size={30} color={color} />,
          tabBarLabelStyle: { 
            width: 54,
            height: 14,
            top: -12,
            fontFamily: "Source Sans Pro",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 14,
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="bag" size={30} color={color} />,
          tabBarLabelStyle: { 
            width: 25,
            height: 14,
            top: -12,
            fontFamily: "Source Sans Pro",
            fontWeight: "400",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 14,
          },
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: { display: "none" },
          href: null,
        }}
      />  
      <Tabs.Screen
        name="details"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signIn"
        options={{
          tabBarStyle: { display: "none" },
          href: null,
        }}
      />
      <Tabs.Screen
        name="signUp"
        options={{
          tabBarStyle: { display: "none" },
          href: null,
        }}
      />
    </Tabs>
  );
}
