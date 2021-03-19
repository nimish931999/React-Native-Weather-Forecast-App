import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./component/WeatherInfo";
import ReloadIcon from "./component/ReloadIcon";
import WeatherDetails from "./component/WeatherDetails";
export default function App() {
  const WEATHER_API_KEY = "Enter your OpenWeather Api key here ";
  const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status != "granted") {
        setErrorMessage("Access to location is needed to run the app");

        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const url = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(url);

      const res = await response.json();

      if (response.ok) {
        setCurrentWeather(res);
      } else {
        setErrorMessage(res.message);
      }
    } catch (error) {}
  }
  if (currentWeather) {
    const {
      main: { temp, feels_like, temp_min, temp_max },
      wind: { speed, deg },
      clouds: { all },
    } = currentWeather;
    return (
      <View style={styles.main}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <ReloadIcon load={load} style={styles.refresh} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text></Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  refresh: {
    top: 0,
    right: 0,
  },
});
