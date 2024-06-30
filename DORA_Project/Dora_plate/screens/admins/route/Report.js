import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import me1 from "../assets/sky.png"
import { Displayscord } from '../displays/location';

export default function DisasterReport() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster Reports</Text>
      
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Smith</Text>
        <Text style={styles.userId}>US001</Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={me1} // Replace with actual image URL
        />

        <View style={styles.details}>
          <Text style={styles.detailText}>Location: <Text style={styles.detailValue}>Buea, Cameroon</Text></Text>
          <Text style={styles.detailText}>Date: <Text style={styles.detailValue}>11/03/2018</Text></Text>
          <Text style={styles.detailText}>Time: <Text style={styles.detailValue}>6:48 PM</Text></Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Coordinates</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center',
  },
  userInfo: {

    marginBottom: 16,
  },
  userName: {
    fontSize: 20,

  },
  userId: {
    fontSize: 16,
    color: '#666',
    marginLeft:30
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  details: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft:20,
  },
  detailValue: {

  },
  button: {
    backgroundColor: '#b22222',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

