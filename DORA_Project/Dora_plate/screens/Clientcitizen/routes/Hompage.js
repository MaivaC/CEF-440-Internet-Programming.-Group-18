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
    </View>
    )
}

const styles = StyleSheet.create({
    Container1: {
      flex: 2,
      backgroundColor: "red",
      marginTop: 20,
      marginBottom: 120,
      alignItems: "center",
   
      fontFamily: "Arial",
      display: "flex",
      fontWeight: "bolder",
    },
  Text: {
      color: "white",
      fontSize:60,
      textAlign:"center",
      justifyContent:"center"
    },
   
  });

export default Chomepage