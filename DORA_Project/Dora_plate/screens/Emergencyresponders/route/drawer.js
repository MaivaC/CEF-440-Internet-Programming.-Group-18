import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import CDashboard2 from "./dashboard";


const Drawer = createDrawerNavigator();

function MMedikdrawer2() {
  return (
    <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerStyle={{ height: 50 }} 
        >
          <Drawer.Screen name="HOME" component={CDashboard2} />
          <Drawer.Screen name="Article" component={SettingsScreen} />
        </Drawer.Navigator>
   
    </View>
  );
}




///Other important connective codes
const CustomDrawerContent = ({ navigation,route }) => {


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
     
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Profile")}>
        <View style={styles.iconContainer}>
      
          <Text style={styles.Text}>Profile</Text>
      
        </View>
        </TouchableOpacity>
      
  
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Home")}>
        <View style={styles.iconContainer}>

          <Text style={styles.Text}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Chat")}>
        <View style={styles.iconContainer}>

          <Text style={styles.Text}> Chats</Text>
          </View>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Donation")}>
        <View style={styles.iconContainer}>

          <Text style={styles.Text}>Donations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonb} onPress={() => navigation.navigate("Prepare")}>
          <Text style={styles.Text}> Prepare</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.Buttonb} onPress={() => navigation.navigate("About")}>
        <View style={styles.iconContainer}>
     
          <Text style={styles.Text}> About App</Text>
          </View>
        </TouchableOpacity>
    
        {/* Add more icons as needed */}
      </View>
      {/* Rest of your drawer content (optional) */}
    </View>
  );
};
export default MMedikdrawer2;



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
    fontSize: 30,
    paddingTop: 5,
    color:"#fff",
    

   
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
    backgroundColor:"#8b0000",
    padding:10,
    paddingRight:10,
    borderRadius:15,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    margin:15,
    
    
  
   

  },
  iconContainer: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    
     // Center vertically
  },
  icon: {
paddingBottom:0,
paddingRight:10,
color:"white"



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
