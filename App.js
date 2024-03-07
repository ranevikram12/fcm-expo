import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";

import Home from "./Home";

export default function App() {
  

  
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}


    <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  donutChart: {
    paddingTop: 50,
    flex: 50,
  },
  barChart: {
    flex: 50,
  },
});