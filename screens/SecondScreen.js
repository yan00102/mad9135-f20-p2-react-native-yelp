import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function SecondScreen({ route, navigation }) {
  const { data } = route.params;
  // console.log(data);

  const Item = ({ name, distance, style, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.distance}>
          {(distance / 1000).toFixed(2)} km away
        </Text>
      </TouchableOpacity>
    );
  };

  const findSelectedRes = (item) => {
    navigation.navigate("ThirdScreen About Us", {
      selectedItem: item,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        name={item.name}
        distance={item.distance}
        img={item.image_url}
        item={item}
        onPress={() => findSelectedRes(item)}
      />
    );
  };

  const styles = StyleSheet.create({
    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#fcfeff",
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: "#e3e4ea",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    title: {
      color: "darkblue",
      fontSize: 23,
      fontWeight: "bold",
      margin: "auto",
    },
    distance: {
      fontSize: 18,
      margin: 10,
      color: "gray",
    },
  });

  return (
    <View style={{ backgroundColor: "#fefaf9" }}>
      <FlatList
        data={data.businesses.sort((a, b) => a.distance - b.distance)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Nearby Restaurants"
        onPress={() => navigation.navigate("ThirdScreen About Us")}
      />
    </View>
  );
}
