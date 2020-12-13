import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Icon } from "react-native";
import * as Location from "expo-location"; // expo-location allows reading geolocation information from the device.
import * as Permissions from "expo-permissions"; //expo-permissions will ask for the user's permission first

export default class HomeScreen extends Component {
  state = {
    longitude: null,
    latitude: null,
    API_KEY:
      "GePd89bGyGTrP3_4k6JJ4sv0W1pn99sL38JxuNUEb3H4uOyI3m5P8ZkhqK7CqxAPRwfhfDB-_pAgVmx2bdW708H74m43vDbM_cmhhPJXxof7hWVoFW4VJ22QHJwIX3Yx",
  };

  getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync(
      Permissions.LOCATION
    );
    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
    }
    let gpsServiceStatus = await Location.hasServicesEnabledAsync();
    if (gpsServiceStatus) {
      let currLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      this.setState(
        {
          longitude: currLocation.coords.longitude,
          latitude: currLocation.coords.latitude,
        },
        this.getData
      );
    } else {
      alert("Please Enable Location Services");
    }
  };

  getData = () => {
    let headers = new Headers({
      Authorization: "Bearer " + this.state.API_KEY,
    });

    let req = new Request(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${this.state.latitude}&longitude=${this.state.longitude}`,
      {
        method: "GET",
        headers: headers,
        mode: "no-cors",
      }
    );
    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        this.props.navigation.navigate("SecondScreen Nearby Restaurants", {
          data: data,
        });
        // console.log(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:'#fefaf9'}}>

        
        <Button
          title="Search Restaurants"
          onPress={this.getLocation}
          //   onPress={() =>
          //     this.props.navigation.navigate("SecondScreen Nearby Restaurants")
          //   }
        />
      </View>
    );
  }
}

