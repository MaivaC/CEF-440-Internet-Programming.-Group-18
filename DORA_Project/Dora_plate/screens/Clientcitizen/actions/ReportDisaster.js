import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const AssistanceForm = () => {
  const [checked, setChecked] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
     <View style={styles.Right}><TouchableOpacity style={styles.closeButton}>
        <Icon name="close" size={15} color="white" />
      </TouchableOpacity></View> 
        <Text style={styles.headerText}>Choose assistance type</Text>
      </View>
      <View style={styles.radioGroup}>
        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
          <View style={styles.radioButton}>
            <RadioButton value="medical" />
            <Text style={styles.radioText}>Medical Assistance</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="rescue" />
            <Text style={styles.radioText}>Rescue and Evacuation</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="shelter" />
            <Text style={styles.radioText}>Shelter and Housing</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="pets" />
            <Text style={styles.radioText}>Pets and Animals</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="security" />
            <Text style={styles.radioText}>Safety and Security</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="transportation" />
            <Text style={styles.radioText}>Transportation</Text>
          </View>
        </RadioButton.Group>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Describe Situation"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.okButton}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    width:"80%",
    marginLeft:40,
    marginTop:90
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radioGroup: {
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 60,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  okButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'darkred',
    borderRadius: 25,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  Right:{
marginLeft:"90%"
  }
});

export default AssistanceForm;