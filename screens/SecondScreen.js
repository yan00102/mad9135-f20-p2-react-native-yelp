import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class SecondScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is SecondScreen.</Text>
        <Button
          title="Nearby Restaurants"
          onPress={() => this.props.navigation.navigate("ThirdScreen About Us")}
        />
      </View>
    );
  }
}
