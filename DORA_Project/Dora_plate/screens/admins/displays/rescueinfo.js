import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  { userName: 'John Smith', userId: 'US001', emergencyRescueId: 'EM001' },
  { userName: 'Maria Garcia', userId: 'US002', emergencyRescueId: 'EM002' },
  { userName: 'Jenifer Brown', userId: 'US003', emergencyRescueId: 'EM003' },
  { userName: 'Micheal Williams', userId: 'US004', emergencyRescueId: 'EM004' },
  { userName: 'James Miller', userId: 'US005', emergencyRescueId: 'EM005' },
  { userName: 'Barbara Anderson', userId: 'US006', emergencyRescueId: 'EM006' },
  { userName: 'Linda Martinez', userId: 'US007', emergencyRescueId: 'EM007' },
  { userName: 'William Wilson', userId: 'US008', emergencyRescueId: 'EM008' },
  { userName: 'Elisabeth Davis', userId: 'US009', emergencyRescueId: 'EM009' },
  { userName: 'Lyne White', userId: 'US010', emergencyRescueId: 'EM010' },
  { userName: 'Aiden Walker', userId: 'US011', emergencyRescueId: 'EM011' },
  { userName: 'Isabella Young', userId: 'US012', emergencyRescueId: 'EM012' },
];

const ARescue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rescue information</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.userId}
        ListHeaderComponent={() => (
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell]}>User Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>User ID</Text>
            <Text style={[styles.cell, styles.headerCell]}>Emergency Rescue ID</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.userName}</Text>
            <Text style={styles.cell}>{item.userId}</Text>
            <Text style={styles.cell}>{item.emergencyRescueId}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Statistics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderLeftWidth:1,  
    borderColor:"#000",

  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f8f8f8',
  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ARescue;
