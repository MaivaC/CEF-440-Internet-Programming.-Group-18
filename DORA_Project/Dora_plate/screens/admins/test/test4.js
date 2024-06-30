import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN');

const App = () => {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} styleURL={MapboxGL.StyleURL.Satellite}>
        <MapboxGL.Camera
          zoomLevel={12}
          centerCoordinate={[-122.4324, 37.78825]}
        />
        <MapboxGL.PointAnnotation
          id="marker-1"
          coordinate={[-122.4324, 37.78825]}
        >
          <View style={styles.markerContainer}>
            <View style={styles.marker} />
          </View>
          <MapboxGL.Callout title="Important House" />
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
  },
});

export default App;
