
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";
import LoadingScreen from "./Dora_plate/components/TEST/Loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';
import CDashboard from "./Dora_plate/screens/Clientcitizen/Dashboard";
import CMedikdrawer from "./Dora_plate/screens/Clientcitizen/Doradrawer";

const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading"   screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: forShrink,
        }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Dashboard" component={CMedikdrawer} />
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
