import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const CallScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}>
          <Icon1 name="user" size={90} color="#000"  />
        </View>
        <Text style={styles.profileName}>Medical Service</Text>
        <Text style={styles.profileNumber}>119</Text>
        <Text style={styles.callStatus}>Ringing</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="volume-high-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="mic-off-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('End Call')}>
          <Icon name="call" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  profileNumber: {
    fontSize: 18,
    color: '#000',
    marginTop: 8,
  },
  callStatus: {
    fontSize: 16,
    color: '#000',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#eee',
    width:"110%"
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:"10%"
  },
});

export default CallScreen;
