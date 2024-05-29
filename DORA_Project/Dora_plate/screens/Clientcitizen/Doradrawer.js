import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import CDashboard from "./Dashboard";
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

function CMedikdrawer() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer >
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerStyle={{ height: 50 }} 
        >
          <Drawer.Screen name="HOME" component={CDashboard} />
          <Drawer.Screen name="Article" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}




///Other important connective codes
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          paddingLeft: 5,
   
          height:"250px"
        }}
      >
        {/* Your desired icon layout */}
     
        <TouchableOpacity style={styles.Buttonb}>
          <Text style={styles.Text}>Profile</Text>
        </TouchableOpacity>
      
  
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Settings")}>
        <View style={styles.iconContainer}>
        <Icon name="home" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.Text}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Chats</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}>Donations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Prepare</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.Buttonb} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> About App</Text>
        </TouchableOpacity>
    
        {/* Add more icons as needed */}
      </View>
      {/* Rest of your drawer content (optional) */}
    </View>
  );
};
export default CMedikdrawer;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AA007500",
    alignItems: "Top",
    justifyContent: "left",
    marginTop: "20px",
    flexDirection: "row",
  },
  Text: {
    fontSize: 40,
    paddingTop: 15,
   
  },
  Text1: {
    fontSize: 22,
    paddingTop: 25,
    marginLeft: 45,
  },
  Text2: {
    fontSize: 18,
    paddingTop: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  touchable: {
    backgroundColor: "green", // Customize color
    width: 70, // Customize size
    height: 70, // Customize size
    borderRadius: 35, // Make it circular (optional)
    alignItems: "center", // Centers content within the touchable area
    justifyContent: "center", // Centers content within the touchable area
    marginLeft: "15%",

    // Transform properties for positioning
    transform: [
      { translateX: 50 }, // Move 50 pixels to the right on the X-axis
      { translateY: 30 }, // Move 100 pixels down on the Y-axis
    ],
  },
  marginO: {
    marginLeft: 20,
  },
  Buttonb:{
    backgroundColor:"#AA44FF",
    padding:10,
    paddingRight:5,
    borderRadius:15,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    margin:0,
    marginTop:5,
    marginBottom:5

  },
  iconContainer: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    
     // Center vertically
  },
  icon: {
paddingBottom:0,
color:"black"



  },
});














































function Article() {}
const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("AccountSettings")} // Route to Account Settings
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>Account Settings</Text>
        </View>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for other settings options */}
    </View>
  );
};
const CustomDrawerItem = ({ label, icons }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {icons.map((icon) => (
        <icon.type
          name={icon.name}
          size={20}
          color="black"
          key={icon.name}
          style={{ marginRight: 5 }}
        />
      ))}
      <Text>{label}</Text>
    </View>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome To the Hospital" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* Add other screens for your stack navigation */}
    </Stack.Navigator>
  );
};

const CustomHeader = ({ title }) => {
  return (
    // Optionally display a custom title or icon here based on screen name
    <View
      style={{
        backgroundColor: blue,
      }}
    >
      {/* Custom header content (if desired) */}
    </View>
  );
};
