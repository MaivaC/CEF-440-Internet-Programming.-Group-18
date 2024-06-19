
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";
import LoadingScreen from "./Dora_plate/components/TEST/Loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';

import MedicalCenterScreen from "./Dora_plate/screens/Clientcitizen/actions/Medicalcenter";
import CallScreen from "./Dora_plate/screens/Clientcitizen/actions/call";

const Stack = createStackNavigator();
export default function App() {
  return (
<View style={styles.container}>
<CallScreen/>
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
