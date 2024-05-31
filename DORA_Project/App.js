import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Csignup from "./Dora_plate/authentication/action/signUp";
import Csignin from "./Dora_plate/authentication/action/login";
import Dashboard from "./Telemedicineapp/Dashboard";
import CMedikdrawer from "./Dora_plate/screens/Clientcitizen/Doradrawer";
import Shelter from "./Dora_plate/screens/Clientcitizen/routes/Findshelterpage";
import Itenary from "./Dora_plate/screens/Clientcitizen/routes/itenary";
import Profile from "./Dora_plate/screens/Clientcitizen/routes/Profile";
import UserProfileForm from "./Dora_plate/components/TEST/Test";
import Chats from "./Dora_plate/screens/Clientcitizen/routes/Chats";
import Contacts from "./Dora_plate/screens/Clientcitizen/routes/Contacts";
import LoadingScreen from "./Dora_plate/components/TEST/Loading";


export default function App() {
  return (
    <View style={styles.container}>
<LoadingScreen/>
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
