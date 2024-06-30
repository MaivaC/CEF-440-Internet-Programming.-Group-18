import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const TApp = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const importantHouses = [
    {
      id: 1,
      title: 'Kelma',
      description: 'This your house ',
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
    },
    {
      id: 2,
      title: 'Therese',
      description: 'This is house 2',
      coordinate: { latitude: 37.78925, longitude: -122.4334 },
    },
    {
        id: 3,
        title: 'Jordan',
        description: ' welocome',
        coordinate: { latitude: 37.78725, longitude: -122.4334 },
      },
      {
        id: 4,
        title: 'Johnny',
        description: ' welocome',
        coordinate: { latitude: 37.78625, longitude: -122.4334 },
      },
    // Add more houses as needed
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="satellite"
        customMapStyle={mapStyle}
      >
        {importantHouses.map(house => (
          <Marker
            key={house.id}
            coordinate={house.coordinate}
            title={house.title}
            description={house.description}
            onPress={() => setSelectedMarker(house.id)}
            pinColor={selectedMarker === house.id ? 'blue' : 'red'} // Change color when selected
          />
        ))}
      </MapView>
      {selectedMarker && (
        <View style={styles.markerDescription}>
          <Text>{importantHouses.find(h => h.id === selectedMarker).description}</Text>
        </View>
      )}
    </View>
  );
};

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f9f',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  // Add more style elements as needed
];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerDescription: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default TApp;
