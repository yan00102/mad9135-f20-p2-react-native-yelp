import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default function ThirdScreen({ route }) {
  const { selectedItem } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>Third Screen</Text> */}
      <Text>{selectedItem.name}</Text>
      <Text>
        {selectedItem.phone.slice(0, 4) +
          "-" +
          selectedItem.phone.slice(4, 7) +
          "-" +
          selectedItem.phone.slice(7, 11)}
      </Text>
      <Text>{(selectedItem.distance / 1000).toFixed(2) + "KM"}</Text>
      <Text>{selectedItem.price}</Text>
      <Text>{selectedItem.rating}</Text>
      <Image
        source={{ uri: selectedItem.image_url }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
