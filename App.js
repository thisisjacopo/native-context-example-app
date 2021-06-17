import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BolgContext";
import React from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Provider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={IndexScreen}
              options={{ title: "My app" }}
            />
          </Stack.Navigator>
        </Provider>
      }
    </NavigationContainer>
  );
}
