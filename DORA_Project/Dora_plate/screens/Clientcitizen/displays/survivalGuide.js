import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,ScrollView  } from 'react-native';


const Guide = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Natural Disasters</Text>

      <View style={styles.content1}>
    
      <View style={styles.disasterContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Vguide')}><Image source={require('../assets/row1.png')} style={styles.disasterImage} /></TouchableOpacity> 
        <Text style={styles.disasterText}>Volcanic Eruption</Text>
      </View>
      <View style={styles.disasterContainer}>
      <TouchableOpacity><Image source={require('../assets/row2.png')} style={styles.disasterImage} /></TouchableOpacity>  
        <Text style={styles.disasterText}>Earthquake</Text>
      </View>

</View>
<View style={styles.content1}>
      <View style={styles.disasterContainer}>
      <TouchableOpacity><Image source={require('../assets/row3.png')} style={styles.disasterImage} /></TouchableOpacity>
        <Text style={styles.disasterText}>Flood</Text>
      </View>
      <View style={styles.disasterContainer}>
      <TouchableOpacity><Image source={require('../assets/heat.png')} style={styles.disasterImage} /></TouchableOpacity> 

        <Text style={styles.disasterText}>Extreme Heat</Text>
      </View>
</View>

<View style={styles.content1}>
      <View style={styles.disasterContainer}>
      <TouchableOpacity><Image source={require('../assets/landslide.png')} style={styles.disasterImage} /></TouchableOpacity> 
        <Text style={styles.disasterText}>Landslide</Text>  
      </View>
      <View style={styles.disasterContainer}>
      <TouchableOpacity><Image source={require('../assets/thunder.png')} style={styles.disasterImage} /></TouchableOpacity> 
        
        <Text style={styles.disasterText}>Thunderstorm</Text>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  disasterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 35,
    
  },
  disasterImage: {
    width: 200,
    height:200,
    marginRight: 10,
    borderRadius:20
  },
  disasterText: {
    fontSize: 18,
  },
  content1:{
flexDirection:"row"

  }
});

export default Guide;
