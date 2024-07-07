
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
import MMedikdrawer2 from "../../Emergencyresponders/route/drawer";
import TApp from "../../admins/displays/map";
import { ALocation } from "../../admins/displays/location";
import ARescue from "../../admins/displays/rescueinfo";
import DisasterReport from "../../admins/route/Report";
import Ahomepage from "../../admins/route/homepage";
import Avpp from "../../../components/TEST/Advert";
import SwipeComponent from '../../../components/TEST/Swipe';
import Csignup2 from '../../../authentication/action/signup2';

const Emergency = () =>{
  return (
  <Stack.Navigator initialRouteName="Loading"   screenOptions={{
      gestureEnabled: true,
      headerShown: false ,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      cardStyleInterpolator: forFadeAndShrink,
    }}>
  <Stack.Screen name="Loading" component={LoadingScreen} />
  <Stack.Screen name="Dashboard" component={MMedikdrawer2} />
  <Stack.Screen name="Chats" component={Chats}/>
  <Stack.Screen name="swipe" component={SwipeComponent}/>
  <Stack.Screen name="Signup" component={Csignup}/>
  <Stack.Screen name="advert" component={Avpp}/>
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
  <Stack.Screen name="Signup2" component={Csignup2}/>
  <Stack.Screen name="Buea" component={ShelterInfo}/>
  <Stack.Screen name="Vguide" component={ViewGuide}/>
  <Stack.Screen name="Volcano" component={EventpreparedScreen}/>
  <Stack.Screen name="contacts" component={Contacts}/>
  <Stack.Screen name="call" component={CallScreen}/>
  <Stack.Screen name="Assist" component={Assistancepage}/>
  <Stack.Screen name="Disaster" component={AssistanceForm}/>
  </Stack.Navigator>
  )

}

const Admin = () => {
return (
  <Stack.Navigator initialRouteName="home"   screenOptions={{
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false ,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: forCircularShrink,
  }}>
   <Stack.Screen name="home" component={Ahomepage} />
  <Stack.Screen name="report" component={DisasterReport} />
  <Stack.Screen name="alert" component={ALocation} />
  <Stack.Screen name="location" component={ARescue}/>
  <Stack.Screen name="rescue" component={TApp}/>
  <Stack.Screen name="map" component={TApp}/>
  </Stack.Navigator>)

}


const Citizen = () => {
 return(
  <Stack.Navigator initialRouteName="Loading"   screenOptions={{
    gestureEnabled: true,
    headerShown: false ,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: forShrink,
  }}>
<Stack.Screen name="Loading" component={LoadingScreen} />
<Stack.Screen name="Dashboard" component={CMedikdrawer} />
<Stack.Screen name="Chats" component={Chats}/>
<Stack.Screen name="Signup" component={Csignup}/>
<Stack.Screen name="Signup2" component={Csignup2}/>
<Stack.Screen name="advert" component={Avpp}/>
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

 )
}


export const Stack = createStackNavigator();
export default function PageTransition() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
<Citizen/>
    </NavigationContainer>
    </GestureHandlerRootView>

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
