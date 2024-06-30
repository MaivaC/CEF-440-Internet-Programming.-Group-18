// MapScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const TMapScreen = ({navigation}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);


  const region = {
    latitude: 4.1582,
    longitude: 9.2642,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    { coordinate: { latitude: 4.1582, longitude: 9.2642 }, title: 'Marker 1', description: 'Description for Marker 1' },
    { coordinate: { latitude: 4.1682, longitude: 9.2742 }, title: 'Marker 2', description: 'Description for Marker 2' },
    { coordinate: { latitude: 4.1482, longitude: 9.2542 }, title: 'Marker 3', description: 'Description for Marker 3' },
    // Add more markers as needed
  ];

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    navigation.navigate('Dashboard', { marker });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        mapType="satellite" // Set the map type to satellite
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      {selectedMarker && (
        <View style={styles.overlay}>
          <Text style={styles.name}>Name: <Text style={styles.bold}>John Smith</Text></Text>
          <Text style={styles.userId}>User_ID: <Text style={styles.bold}>US001</Text></Text>
          <Text style={styles.description}>{selectedMarker.description}</Text>
          <Text style={styles.status}>Assisted</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
  },
  userId: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: 'green',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TMapScreen;
