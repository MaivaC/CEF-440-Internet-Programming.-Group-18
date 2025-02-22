
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
import PaymentScreen from "./Dora_plate/screens/Clientcitizen/actions/Payment";
import PaymentSuccessScreen from "./Dora_plate/screens/Clientcitizen/actions/paymentsuccessscreen";
import PrepareScreen from "./Dora_plate/screens/Clientcitizen/actions/prepare";
import EventpreparedScreen from "./Dora_plate/screens/Clientcitizen/actions/eventprepared";
import About from "./Dora_plate/screens/Clientcitizen/displays/About";
import MessageScreen from "./Dora_plate/screens/Clientcitizen/actions/message";
import ShelterInfo from "./Dora_plate/screens/Clientcitizen/displays/actions/shelterInfo";
import ShelterList from "./Dora_plate/screens/Clientcitizen/displays/shelter";
import Guide from "./Dora_plate/screens/Clientcitizen/displays/survivalGuide";
import ViewGuide from "./Dora_plate/screens/Clientcitizen/displays/actions/viewGuide";
import Ahomepage from "./Dora_plate/screens/admins/route/homepage";
import ARescue from "./Dora_plate/screens/admins/displays/rescueinfo";
import ALocation from "./Dora_plate/screens/admins/displays/location";
import DisasterReport from "./Dora_plate/screens/admins/route/Report";
import MapScreen from "./Dora_plate/screens/admins/displays/map";
import MapScreen2 from "./Dora_plate/screens/admins/test/test";
import TMapScreen from "./Dora_plate/screens/admins/test/test2";
import TApp from "./Dora_plate/screens/admins/displays/map";
import Tmessage from "./Dora_plate/screens/Emergencyresponders/route/response";
import Avpp from "./Dora_plate/components/TEST/Advert";
import SwipeComponent from "./Dora_plate/components/TEST/Swipe";



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
