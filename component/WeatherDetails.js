import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;
const WeatherDetails = ({ currentWeather }) => {
  const {
    main: { humidity, feels_like },
    wind: { speed, deg },
    clouds: { all },
  } = currentWeather;
  return (
    <View style={styles.WeatherDetails}>
      <View style={styles.WeatherDetailsRow}>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels Like :</Text>
              <Text style={styles.textSecondary}>
                {(feels_like - 273).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels Like :</Text>
              <Text style={styles.textSecondary}>
                {(feels_like - 273).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.WeatherDetailsRow}>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5 name="wind" size={25} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed:</Text>
              <Text style={styles.textSecondary}>{speed} m/sec</Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5 name="directions" size={25} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind Direction :</Text>
              <Text style={styles.textSecondary}>{deg}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  WeatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  WeatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  WeatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  WeatherDetailsBoxRight: {
    flex: 1,
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: BORDER_COLOR,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: "700",
    margin: 7,
  },
});
export default WeatherDetails;
