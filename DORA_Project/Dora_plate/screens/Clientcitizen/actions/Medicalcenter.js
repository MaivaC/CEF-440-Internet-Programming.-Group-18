import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MedicalCenterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" style={styles.icon1} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Medical Center</Text>
        <TouchableOpacity>
          <Icon name="call-outline" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.statusText}>
          Currently waiting for the approval of the emergency personnel that will assist you
        </Text>
      </View>
      <View style={styles.footer}>
        <Icon name="happy-outline" size={24} />
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity>
          <Icon name="mic-outline" size={24} style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },icon:{
    color:"green"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon1:{color:"black",
fontWeight:"bold"
},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
marginTop:"170%",
marginBottom:0,

    padding:0,
  },
  statusText: {
    fontSize: 16,
    textAlign: 'center',
    padding:0,
    backgroundColor:"grey",
    alignItems:"center"
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default MedicalCenterScreen;
