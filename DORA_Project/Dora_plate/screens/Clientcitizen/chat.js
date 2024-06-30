import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Chats = ({navigation}) => {


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card } onPress={() => navigation.navigate('Assist')}>
          <Icon name="plus" type="font-awesome" color="green" size={24} />
          <Text style={styles.cardText}>Request</Text>
          <Text style={styles.cardText}>Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Disaster')}>
          <Icon name="comment" type="font-awesome" color="green" size={24} />
          <Text style={styles.cardText}>Report</Text>
          <Text style={styles.cardText}>Disaster</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}><TouchableOpacity style={styles.back }  onPress={() => navigation.navigate('call')}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" /> Levi Xavier</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green"  /> Frida Newman</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" /> Monica Gunstanbidae</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" /> Kingsley Kenny</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" /> Scott Summer</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" /> Logan Wolverine</Text></TouchableOpacity>
      <TouchableOpacity style={styles.back}><Text style={styles.Text}><Icon1 name="call" size={30} color="green" />Silivenne Olivera</Text></TouchableOpacity>
     </View><TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('contacts')}>
        <Icon name="plus" type="font-awesome" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content:{flexDirection:"column"},
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#fff',
  },
  back:{
    marginTop:10,
    backgroundColor:"#f5f5f5",
    padding:10,
    flexDirection:"column"
  },
  Text:{
textAlign:"left",
marginLeft:40,
fontSize:28,


border:40,


  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems:"center",
    marginLeft:40
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
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
    alignItems: 'center',
  },
});

export default Chats;
