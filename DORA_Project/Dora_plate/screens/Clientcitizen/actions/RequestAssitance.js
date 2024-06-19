import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Assistancepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/camera.png' }} // You can replace with local file if necessary
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Take photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/folder-invoices.png' }} // You can replace with local file if necessary
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    width:600,
    backgroundColor: '#4682B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    width:600,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    color:"white",
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight:"bold"

  },
});

export default Assistancepage;