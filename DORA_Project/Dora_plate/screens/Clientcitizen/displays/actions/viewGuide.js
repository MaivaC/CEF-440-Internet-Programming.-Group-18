import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ViewGuide= () => {
  return (
    <View style={styles.container}>
     
      <Image source={require('../../assets/volcano1.png')} style={styles.disasterImage} /> 
      <Text style={styles.title}>Volcanic Eruption</Text>
      <Text style={styles.disasterText}>During an eruption, if authorities instruct you to evacuate, do so immediately. Follow designated evacuation routes and avoid low-lying areas prone to lava and pyroclastic flows. If evacuation isn't possible, shelter in place by staying indoors, closing all windows and doors, and sealing openings with damp towels or duct tape. Stay informed by using a battery-powered radio to receive updates and instructions from authorities. Protecting yourself from ash involves staying indoors to avoid exposure. If you must go outside, wearing long sleeves, pants, a dust mask, and goggles will help minimize contact with volcanic ash. It's also important to cover water sources to prevent contamination from ash.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  disasterImage: {
    width: 410,
    height: 180,
    marginBottom: 20,
    borderRadius:20
  },
  disasterText: {
    fontSize: 16,
    
  },
});

export default ViewGuide;
