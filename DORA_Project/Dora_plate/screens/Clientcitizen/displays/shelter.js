import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import image1 from "../assets/shelterinfo1.png"
import image2 from "../assets/Buea1.png"
import image3 from "../assets/Castle1.png"
import image4 from "../assets/Castle.png"
const shelters = [
  {
    name: "University of Buea Shelter",
    imageUrl: image1, // Replace with the actual image URL
  },
  {
    name: "Buea Town Shelter",
    imageUrl: image2, // Replace with the actual image URL
  },
  {
    name: "Von Puttkamer Castle",
    imageUrl: image3, // Replace with the actual image URL
  },
  {
    name: "The Historic City",
    imageUrl: image4, // Replace with the actual image URL
  },
];

const ShelterList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {shelters.map((shelter, index) => (
        <View key={index} style={styles.shelterContainer}>
          <Image source={ shelter.imageUrl } style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.text}>{shelter.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  shelterContainer: {
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ShelterList;
