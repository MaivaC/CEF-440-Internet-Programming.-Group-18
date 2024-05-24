import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";


const Chomepage = () => {
    return(
    <View style={styles.Container1}><Text style={styles.Text}>Welcome</Text>

    <View style={styles.Container1}><Text style={styles.Text}>Welcome</Text></View>
    <View style={styles.container1}><Text style={styles.Text}>Welcome</Text></View>
    </View>

    )
}

const styles = StyleSheet.create({
    container1:{

        backgroundColor:"blue"
    },

    container2:{
        flex:2,
 backgroundColor:"green"
    },

    container3:{
        flex:1,
        backgroundColor:"red"
    },

    Container1: {

      backgroundColor: "red",
      marginTop: 20,
      marginBottom: 120,
      alignItems: "center",
   
      fontFamily: "Arial",
      display: "flex",
      fontWeight: "bolder",
    },
    display:{backgroundColor:"green" },
    display1:{backgroundColor:"green"}, 
    display2:{backgroundColor:"blue"},
  Text: {
      color: "white",
      fontSize:60,
      textAlign:"center",
      justifyContent:"center"
    },
    Text1: {
        color: "white",
        fontSize:20,
        textAlign:"center",
        justifyContent:"center"
      },
   
  });

export default Chomepage