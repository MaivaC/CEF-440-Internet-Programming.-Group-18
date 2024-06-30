import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image} from 'react-native';
import me1 from "../assets/Logo.png"
const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={me1} width={5} height={5}/>
      <Text style={styles.text}>
        ResQ can empower users by providing them with critical information and resources before, during, and after a disaster.
      </Text>
      <Text style={styles.text}>
        This can include educational content on different disasters, preparedness tips, evacuation routes, and real-time updates. Real-time alerts, weather data, and hazard maps can provide users with a clearer understanding of the developing situation, allowing them to make informed decisions about their safety. The app can facilitate communication between emergency services and the public.
      </Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 23,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default About;
