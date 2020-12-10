import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location"; // expo-location allows reading geolocation information from the device.

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is HomeScreen.</Text>
      </View>
    );
  }
}
