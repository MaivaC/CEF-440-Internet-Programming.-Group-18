import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import me2 from "../assets/alert.png"
import me1 from "../assets/feedback.png"
import me3 from "../assets/response.png"
import me4 from "../assets/target.png"
const Ahomepage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Admin 01</Text>
      <Text style={styles.question}>Which operation will you like to perform?</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={me1} style={styles.icon} />
          <Text style={styles.label}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={me2} style={styles.icon} />
          <Text style={styles.label}>Alert Disaster</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={me3} style={styles.icon} />
          <Text style={styles.label}>View Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={me4} style={styles.icon} />
          <Text style={styles.label}>Coordinate Response</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 24,
    marginTop:25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    color: 'red',
    marginBottom: 150,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    height:250,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 8,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Ahomepage;
