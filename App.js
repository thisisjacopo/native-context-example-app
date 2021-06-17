import { NavigationContainer, NavigationContext } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BolgContext";
import React from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <BlogProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ gestureEnabled: false }}
        >
          <Stack.Screen
            name="Home"
            component={IndexScreen}
            options={{ title: "My app" }}
          />
        </Stack.Navigator>
        </BlogProvider>
      }
    </NavigationContainer>
  );
}
