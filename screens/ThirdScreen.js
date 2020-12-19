import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ThirdScreen({ route }) {
  const { selectedItem } = route.params;

  const styles = StyleSheet.create({
    Card: {
      margin: 100,
      backgroundColor: "#fcfeff",
      padding: 10,
      borderRadius: 10,
      shadowColor: "#e3e4ea",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    rating: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "darkblue",
      height: 30,
      width: 50,
      borderRadius: 20,
      marginBottom: 10,
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fefaf9",
      }}
    >
      <View style={styles.Card}>
        <Image
          source={{ uri: selectedItem.image_url }}
          style={{
            width: 380,
            height: 300,
            marginBottom: 20,
            borderRadius: 10,
          }}
        />

        <Text style={{ color: "darkblue", fontSize: 25, fontWeight: "bold" }}>
          {selectedItem.name}
        </Text>
        <View style={styles.rating}>
          <Text style={{ fontSize: 15, color: "#ffffff" }}>
            {selectedItem.rating}
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginBottom: 10, opacity: 0.7 }}>
          {selectedItem.phone.slice(0, 4) +
            "-" +
            selectedItem.phone.slice(4, 7) +
            "-" +
            selectedItem.phone.slice(7, 11)}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 10, opacity: 0.7 }}>
          {(selectedItem.distance / 1000).toFixed(2) + " KM AWAY"}
        </Text>
      </View>
    </View>
  );
}
