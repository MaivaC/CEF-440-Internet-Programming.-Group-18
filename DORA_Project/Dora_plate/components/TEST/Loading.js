// components/LoadingScreen.js
import React from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


const LoadingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.welcomeText}>Welcome to DORA</Text>
      <Animatable.Text animation="pulse" iterationCount="infinite" style={styles.loadingText}>
      <Text style={styles.loadingText}>Loading, please wait...</Text>
 <Button title='Continue'  onPress = {() => navigation.navigate('Dashboard')} style={styles.Button}/> </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#990000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  Button:{
backgroundColor:"blue"


  }
});

export default LoadingScreen;
