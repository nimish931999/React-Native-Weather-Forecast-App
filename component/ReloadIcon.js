import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const ReloadIcon = ({ load }) => {
  const reloadIcon = Platform.OS == "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIcon}
        size={42}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});
export default ReloadIcon;
