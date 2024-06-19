
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";
import LoadingScreen from "./Dora_plate/components/TEST/Loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';
import CDashboard from "./Dora_plate/screens/Clientcitizen/Dashboard";
import CMedikdrawer from "./Dora_plate/screens/Clientcitizen/Doradrawer";
import PageTransition from "./Dora_plate/screens/Clientcitizen/controller/PageTransitionController";
import MessageContacts from "./Dora_plate/screens/Clientcitizen/displays/actions/MessageContact";

import Csignup from "./Dora_plate/authentication/action/signUp";

const Stack = createStackNavigator();
export default function App() {
  return (

<PageTransition/>


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
