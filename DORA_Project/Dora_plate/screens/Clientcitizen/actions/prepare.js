import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const DATA = [
  { id: '1', title: 'Earthquake', icon: 'home', color: '#a50000' },
  { id: '2', title: 'Extreme Heat', icon: 'thermometer', color: '#a50000' },
  { id: '3', title: 'Flood', icon: 'water', color: '#a50000' },
  { id: '4', title: 'Fire', icon: 'fire', color: '#a50000' },
  { id: '5', title: 'Landslides', icon: 'mountain', color: '#a50000' },
  { id: '6', title: 'Thunderstorm', icon: 'bolt', color: '#a50000' },
  { id: '7', title: 'Volcanic Eruption', icon: 'volcano', color: '#a50000' },
];

const PrepareScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Icon name={item.icon} type="font-awesome-5" color={item.color} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Icon name="chevron-right" type="font-awesome-5" color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",
    marginTop:"20%",
    justifyContent:"center",
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
});

export default PrepareScreen;
