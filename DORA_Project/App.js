import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Csignup from "./Dora_plate/authentication/action/signUp";
import Csignin from "./Dora_plate/authentication/action/login";

export default function App() {
  return (
    <View style={styles.container}>
   <Csignin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Robert:{
    color:"white",
    backgroundColor:"brown"
  }
});
