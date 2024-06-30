import React from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';


const DATA = [
  { id: '1', name: 'John Smith', assistance: 'Medical Assistance', time: '03:15 PM' },
  { id: '2', name: 'Maria Garcia', assistance: 'Medical Assistance', time: '07:36 PM' },
  { id: '3', name: 'Jenifer Brown', assistance: 'Rescue & Evacuation', time: '02:45 PM' },
  { id: '4', name: 'Micheal Williams', assistance: 'Rescue & Evacuation', time: '03:30 PM' },
  { id: '5', name: 'James Miller', assistance: 'Safety & Security', time: '05:15 PM' },
  { id: '6', name: 'Barbara Anderson', assistance: 'Safety & Security', time: '06:16 PM' },
  { id: '7', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '8', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '9', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
  { id: '10', name: 'James Miller', assistance: 'Safety & Security', time: '05:15 PM' },
  { id: '11', name: 'Barbara Anderson', assistance: 'Safety & Security', time: '06:16 PM' },
  { id: '12', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '13', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '14', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
  { id: '15', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '16', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '17', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
  { id: '18', name: 'James Miller', assistance: 'Safety & Security', time: '05:15 PM' },
  { id: '19', name: 'Barbara Anderson', assistance: 'Safety & Security', time: '06:16 PM' },
  { id: '20', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '21', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '22', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
  { id: '23', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '24', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '25', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
  { id: '26', name: 'James Miller', assistance: 'Safety & Security', time: '05:15 PM' },
  { id: '27', name: 'Barbara Anderson', assistance: 'Safety & Security', time: '06:16 PM' },
  { id: '28', name: 'Linda Martinez', assistance: 'Shelter & Housing', time: '01:15 AM' },
  { id: '29', name: 'William Wilson', assistance: 'Shelter & Housing', time: '03:15 AM' },
  { id: '30', name: 'Elisabeth Davis', assistance: 'Pets & Animals', time: '06:15 PM' },
];

const Tmessage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.leftSection}>
        <Avatar
          rounded
          icon={{ name: 'user', type: 'font-awesome', color: '#000' }}
          containerStyle={styles.avatar}
        />
        <TouchableOpacity><View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.assistance}>{item.assistance}</Text>
        </View></TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.statusContainer}>
         <TouchableOpacity><Text style={styles.statusText}>1</Text></TouchableOpacity>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
<FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  assistance: {
    fontSize: 14,
    color: '#888',
  },
  rightSection: {
    marginLeft: 'auto',
    alignItems: 'center',
  },
  statusContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default Tmessage;
