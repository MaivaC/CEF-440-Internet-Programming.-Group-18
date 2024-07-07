// components/LoadingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import me1 from "../../screens/admins/assets/Logo.png";

const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME! WELCOME!</Text>
      <Image source={me1} style={{ width: 400, height: 400 }} />
      {loading ? (
        <ActivityIndicator size="large" color="#0ff" />
      ) : (
        <Animatable.Text animation="pulse" iterationCount="infinite" style={styles.loadingText}>
          <Text style={styles.loadingText}>Loading, please wait... {'\n'} {'\n'} {'\n'}</Text>
          <Button title="Continue" onPress={() => navigation.navigate('advert')}/>
        </Animatable.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#990000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: "white",
    marginBottom: 100,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: "white",
  },
  Button: {
    backgroundColor: "blue",
    width: 100,
  },
});

export default LoadingScreen;
