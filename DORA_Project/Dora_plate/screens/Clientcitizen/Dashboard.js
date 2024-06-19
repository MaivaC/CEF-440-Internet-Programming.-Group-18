import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import {
  StyleSheet,
  View,
  Animated,
} from "react-native";
import Chomepage from "./routes/Hompage";
import Profile from "./routes/Profile";
import Chats from "./chat";


function Homepage(){

}


function Message(){
    
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function CDashboard() {
  const opacity = new Animated.Value(0); // Initial opacity 0
  const [isVisible, setIsVisible] = useState(false);
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1, // Animate to opacity 1
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Optimize for performance (optional)
    }).start();
  };

  const [imagePosition, setImagePosition] = useState("flex-start");

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home"; // Adjust icon names based on your icon library
            } else if (route.name === "Chats") {
              iconName = focused ? "chat" : "chat"; // Adjust icon names based on your icon library
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person";
            }
            else if(route.name==="Prepare") {
              iconName = focused ? "man" : "man";

            }
            // Return the icon component
            return (
              <MaterialIcons name={iconName} size={45} color={"#8b0000"} /> // Use Ionicons or other icon library
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Chomepage}
        />
        <Tab.Screen
          name="Chats"
          options={{ headerShown: false }}
          component={Chats}
        />
        <Tab.Screen
          name="Prepare"
          options={{ headerShown: false }}
          component={Message}
        />
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00007500",
    alignItems: "Top",
    justifyContent: "left",
    marginTop: "20px",
  },
  title: {
    fontsize: 20,
    marginTop: 150,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginLeft: "25%", // Adjust the resizeMode as needed
  },
  input: {
    width: "50%",
    height: "20em",
    backgroundColor: "#00AAAA",
    marginLeft: 10,
    textAlign: "center",
    marginTop: "50%",
    marginLeft: "25%",
  },
  button: {
    display: "flex",
    width: "10",
    marginLeft: "25%",
    borderRadius: 8,
    backgroundColor: "#9ACD32",
  },
});
