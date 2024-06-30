import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Chats = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Icon name="plus" type="font-awesome" color="green" size={24} />
          <Text style={styles.cardText}>Request</Text>
          <Text style={styles.cardText}>Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="comment" type="font-awesome" color="green" size={24} />
          <Text style={styles.cardText}>Report</Text>
          <Text style={styles.cardText}>Disaster</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('contacts')}>
        <Icon name="plus" type="font-awesome" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent:"center",
    alignItems:"center"
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    width: 150,
  },
  cardText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#757575',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
  
  },
});

export default Chats;
