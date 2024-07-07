import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const importantHouses = [
  {
    id: 1,
    title: 'Buea Town House',
    description: 'A very wide and good  shelter ',
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
    color:'blue',
  },
  {
    id: 2,
    title: 'Buea Town Staduim',
    description: 'Good Public shelter',
    coordinate: { latitude: 37.78925, longitude: -122.4334 },
    color:'blue',
  },
  {
      id: 3,
      title: ' Monument',
      description: ' Get Ready to be procted',
      coordinate: { latitude: 37.78735, longitude: -122.4334 },
      color:'blue',
    },
    {
      id: 4,
      title: 'Johnny',
      description: ' Here Is your position ',
      coordinate: { latitude: 37.78645, longitude: -122.4334 },
      color:'red',
    },
    {
      id: 5,
      title: 'Kelma Gifty',
      description: 'Emergency Respondant agent(fire)',
      coordinate: { latitude: 37.78855, longitude: -122.4324 },
      color:'black',
    },
    {
      id: 6,
      title: 'Shelters',
      description: 'Unviversity Buea',
      coordinate: { latitude: 37.78975, longitude: -122.4334 },
    },
    {
        id: 7,
        title: 'Jordan spikes',
        description: 'Emergency Respondant',
        coordinate: { latitude: 37.79975, longitude: -122.4334 },
        color:'black',
      },
      {
        id: 8,
        title: 'Johnny Ronston',
        description: ' Family',
        coordinate: { latitude: 37.78825, longitude: -122.4334 },
        color:'#ff8',
      }
    ];

const TApp = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  const [houses, setHouses] = useState(importantHouses);

  useEffect(() => {
    const distance = 0.018; // Roughly 2 km in latitude or longitude degrees
    let movingUp = true;
    let movingRight = true;

    const updateCoordinates = () => {
      setHouses((prevHouses) =>
        prevHouses.map((house, index) => {
          if (index === 0 || index === 1) {
            // Move upward
            let newLat = house.coordinate.latitude + (movingUp ? 0.0001 : -0.0001);
            if (Math.abs(newLat - house.coordinate.latitude) >= distance) {
              movingUp = !movingUp;
              newLat = house.coordinate.latitude;
            }
            return {
              ...house,
              coordinate: { latitude: newLat, longitude: house.coordinate.longitude },
            };
          } else if (index === 2) {
            // Move horizontally
            let newLng = house.coordinate.longitude + (movingRight ? 0.0001 : -0.0001);
            if (Math.abs(newLng - house.coordinate.longitude) >= distance) {
              movingRight = !movingRight;
              newLng = house.coordinate.longitude;
            }
            return {
              ...house,
              coordinate: { latitude: house.coordinate.latitude, longitude: newLng },
            };
          }
          return house;
        })
      );
    };

    const interval = setInterval(updateCoordinates, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
      // Add more houses as needed
    // Add more houses as needed
      // Add more houses as needed
    // Add more houses as needed


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
            pinColor={selectedMarker === house.id ? 'blue' : house.color} // Change color when selected
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
