import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import picture from "../assets/volcano.png"
const EventpreparedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Volcanic Eruption</Text>
      <Image 
        source={picture} 
        style={styles.image} 
      />
      <Text style={styles.subHeader}>Evacuation Plan:</Text>
      <Text style={styles.description}>
        Create a detailed evacuation plan for your family, considering multiple evacuation routes based on potential eruption scenarios. Identify a safe meeting place outside the eruption zone and establish a communication plan to connect with each other during and after an eruption (phone lines might be overloaded).
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Got It</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#990000',
    padding: 15,
    borderRadius: 5,
    width:200
    ,
    
  },
  buttonText: {
    color: '#fffff0',
    fontSize: 16,
textAlign:"center"
  },
});

export default EventpreparedScreen;
