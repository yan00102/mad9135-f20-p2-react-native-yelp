import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Spinner from "react-native-loading-spinner-overlay";

export default class HomeScreen extends Component {
  state = {
    loading: false,
    longitude: null,
    latitude: null,
    API_KEY:
      "GePd89bGyGTrP3_4k6JJ4sv0W1pn99sL38JxuNUEb3H4uOyI3m5P8ZkhqK7CqxAPRwfhfDB-_pAgVmx2bdW708H74m43vDbM_cmhhPJXxof7hWVoFW4VJ22QHJwIX3Yx",
  };

  getLocation = async () => {
    this.startLoading;
    let { status } = await Location.requestPermissionsAsync(
      Permissions.LOCATION
    );
    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
    }
    let gpsServiceStatus = await Location.hasServicesEnabledAsync();
    if (gpsServiceStatus) {
      this.setState({ loading: true });
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
        this.setState({ loading: false });
        this.props.navigation.navigate("SecondScreen Nearby Restaurants", {
          data: data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.container}>
          <Spinner
            visible={this.state.loading}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fefaf9",
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginBottom: 30 }}
            source={require("../assets/yelpIcon.png")}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              height: 60,
              width: 300,
              shadowColor: "gray",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              borderRadius: 40,
            }}
          >
            <Button
              style={{ color: "#ffffff" }}
              title="Search Restaurants"
              onPress={this.getLocation}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 30,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
