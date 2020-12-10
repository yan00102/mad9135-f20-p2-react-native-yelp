import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SecondScreen({ route, navigation }) {
  const { data } = route.params;
  // console.log(data);

  const Item = ({ name, distance, style, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>Restaurants: {name}</Text>
        <Text style={styles.title}>
          Distance: {(distance / 1000).toFixed(2)}
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
        item={item}
        onPress={() => findSelectedRes(item)}
      />
    );
  };

  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  return (
    <View>
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
