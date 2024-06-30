
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';
import LoadingScreen from "../../../components/TEST/Loading";
import CMedikdrawer from "../Doradrawer";
import Chats, { CallScreen2 } from "../chat";
import Csignup from "../../../authentication/action/signUp";
import Csignin from "../../../authentication/action/login";
import About from "../displays/About";
import PrepareScreen from "../actions/prepare";
import Profile from "../routes/Profile";
import MessagingScreen from "../displays/actions/MessageContact";
import MessageScreen from "../actions/message";
import Chomepage from "../routes/Hompage";
import PaymentScreen from "../actions/Payment";
import PaymentSuccessScreen from "../actions/paymentsuccessscreen";
import ShelterList from "../displays/shelter";
import Guide from "../displays/survivalGuide";
import ShelterInfo from "../displays/actions/shelterInfo";
import ViewGuide from "../displays/actions/viewGuide";
import EventpreparedScreen from "../actions/eventprepared";
import Contacts from "../routes/Contacts";
import CallScreen from "../actions/call";
import Assistancepage from "../actions/RequestAssitance";
import AssistanceForm from "../actions/ReportDisaster";


export const Stack = createStackNavigator();
export default function PageTransition() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading"   screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: forFadeAndShrink,
        }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Dashboard" component={CMedikdrawer} />
      <Stack.Screen name="Chats" component={Chats}/>
      <Stack.Screen name="Signup" component={Csignup}/>
      <Stack.Screen name="SignIn" component={Csignin}/>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Prepare" component={PrepareScreen} />
      <Stack.Screen name="Home" component={Chomepage}/>
      <Stack.Screen name="Donation" component={PaymentScreen}/>
      <Stack.Screen name="Chat" component={MessageScreen}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="success" component={PaymentSuccessScreen}/>
      <Stack.Screen name="Shelter" component={ShelterList}/>
      <Stack.Screen name="Survival" component={Guide}/>
      <Stack.Screen name="Buea" component={ShelterInfo}/>
      <Stack.Screen name="Vguide" component={ViewGuide}/>
      <Stack.Screen name="Volcano" component={EventpreparedScreen}/>
      <Stack.Screen name="contacts" component={Contacts}/>
      <Stack.Screen name="call" component={CallScreen}/>
      <Stack.Screen name="Assist" component={Assistancepage}/>
        <Stack.Screen name="Disaster" component={AssistanceForm}/>
     
        
      

       
      </Stack.Navigator>
      
    </NavigationContainer>

  );
}
const forFadeAndShrink = ({ current, next, layouts }) => {
  return {
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    },
  };
};


const forShrink = ({ current, next, layouts }) => {
  return {
    cardStyle: {
      opacity: current.progress,
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [4, 1],
          }),
        },
      ],
    },
  };
};


// Custom card style interpolator for circular shrinking animation
const forCircularShrink = ({ current, layouts }) => {
  const { width, height } = Dimensions.get('window');
  const progress = Animated.multiply(current.progress, new Animated.Value(1));

  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const transform = [
    {
      scale: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  ];

  return {
    cardStyle: {
      opacity,
      transform,
      borderRadius: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [Math.max(width, height), 0],
      }),
      overflow: 'hidden',
    },
  };
};

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
