import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import * as React from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
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
      }
    </NavigationContainer>
  );
}
