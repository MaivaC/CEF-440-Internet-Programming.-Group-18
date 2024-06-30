import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import shelter from "../../assets/shelterinfo1.png"
const ShelterInfo = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={shelter} // Replace with the actual image URL
        style={styles.image}
      />
      <Text style={styles.title}>University of Buea Shelter</Text>
      <Text style={styles.description}>
        Offering a garden and city view, Akhard Haus is located in Buea, 13 km from Tiko Golf Club and 28 km from Botanical Garden. Free private parking and free WiFi are available. It offers family rooms.
      </Text>
      <Text style={styles.sectionTitle}>Available Resources</Text>
      <View style={styles.resources}>
        <Text style={styles.resourceItem}>🩹 First aid kits</Text>
        <Text style={styles.resourceItem}>🍴 Food supply</Text>
      </View>
      <Text style={styles.sectionTitle}>Restrictions</Text>
      <Text style={styles.restrictionItem}>❌ Pets are not allowed</Text>
      <View style={styles.buttonContainer}>
        <Button title="Use Shelter" onPress={() => { /* Handle the button press */ }} color="#990000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,

  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  resources: {
    marginBottom: 20,
    marginLeft:15
  },
  resourceItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  restrictionItem: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
    marginLeft:15
  },
  buttonContainer: {
    marginTop: 40,
    width: '80%',
  marginLeft:25,

  },
});

export default ShelterInfo;
