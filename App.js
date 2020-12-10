import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search Your Favourite">
        <Stack.Screen
          name="HomeScreen Yelp"
          component={HomeScreen}
          options={{ title: "Yelp" }}
        />
        <Stack.Screen
          name="SecondScreen Nearby Restaurants"
          component={SecondScreen}
          options={{ title: "Nearby Restaurants" }}
        />
        <Stack.Screen
          name="ThirdScreen About Us"
          component={ThirdScreen}
          options={{ title: "About Us" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
