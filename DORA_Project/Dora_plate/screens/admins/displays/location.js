import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView,TouchableOpacity } from 'react-native';
import me1 from "../assets/flood1.png"


export function ALocation() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Type of Disaster</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>Flood</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Location Coordinates</Text>
        <View style={styles.coordinatesContainer}>
          <Text style={styles.coordinateLabel}>Latitude</Text>
          <View style={styles.coordinateRow}>
            <View style={styles.radioGroup}>
              <Text>N </Text>
              <Text>0</Text>
              <Text> S</Text>
            </View>
            <TextInput style={styles.coordinateInput} value="4" />
            <Text>°</Text>
            <TextInput style={styles.coordinateInput} value="9" />
            <Text>'</Text>
            <TextInput style={styles.coordinateInput} value="21.477" />
            <Text>"</Text>
          </View>
          <Text style={styles.coordinateLabel}>Longitude</Text>
          <View style={styles.coordinateRow}>
            <View style={styles.radioGroup}>
              <Text>E </Text>
              <Text>0</Text>
              <Text> W</Text>
            </View>
            <TextInput style={styles.coordinateInput} value="9" />
            <Text>°</Text>
            <TextInput style={styles.coordinateInput} value="15" />
            <Text>'</Text>
            <TextInput style={styles.coordinateInput} value="47.607" />
            <Text>"</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.column}>
        <View style={styles.infoRow}>

          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoValue}>6:00 AM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Speed</Text>
          <Text style={styles.infoValue}>140 mph</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Radius</Text>
          <Text style={styles.infoValue}>10Km</Text>
        </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Load Image</Text>
        <Image
          style={styles.image}
          source={me1} 
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Alert</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
    buttonText:{color:"white"},
column:{
flexDirection:"column"
    },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,

  },
  label: {
    fontSize: 18,

    color: '#000',
    marginBottom: 8,

  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#b22222',
    padding: 8,
    borderRadius: 8,
  },
  input: {
    fontSize: 18,
   textAlign:"center"
  },
  coordinatesContainer: {
    borderWidth: 1,
    borderColor: '#b22222',
    padding: 8,
    borderRadius: 8,
  
},
  coordinateLabel: {
    fontSize: 16,
    marginTop: 8,
       marginLeft:40

  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    margin: 10,
    marginLeft:90,
   
    width:"50%",
    borderRadius: 10,
    alignItems: 'center',
  },
  coordinateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft:100
  },
  radioGroup: {
    flexDirection: 'row',
    marginRight: 8,
  },
  coordinateInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#bff',
    marginHorizontal: 4,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  infoRow: {
    flexDirection: 'column',
 
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,

  },
  infoValue: {
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
});

export function Displayscord(){
    return <View>
<Text style={styles.label}>Location Coordinates</Text>
        <View style={styles.coordinatesContainer}>
          <Text style={styles.coordinateLabel}>Latitude</Text>
          <View style={styles.coordinateRow}>
            <View style={styles.radioGroup}>
              <Text>N </Text>
              <Text>0</Text>
              <Text> S</Text>
            </View>
            <TextInput style={styles.coordinateInput} value="4" />
            <Text>°</Text>
            <TextInput style={styles.coordinateInput} value="9" />
            <Text>'</Text>
            <TextInput style={styles.coordinateInput} value="21.477" />
            <Text>"</Text>
          </View>
          <Text style={styles.coordinateLabel}>Longitude</Text>
          <View style={styles.coordinateRow}>
            <View style={styles.radioGroup}>
              <Text>E </Text>
              <Text>0</Text>
              <Text> W</Text>
            </View>
            <TextInput style={styles.coordinateInput} value="9" />
            <Text>°</Text>
            <TextInput style={styles.coordinateInput} value="15" />
            <Text>'</Text>
            <TextInput style={styles.coordinateInput} value="47.607" />
            <Text>"</Text>
          </View>
        </View>

    </View>
}