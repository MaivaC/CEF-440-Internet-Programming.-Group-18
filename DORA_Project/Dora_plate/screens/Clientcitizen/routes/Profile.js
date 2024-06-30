import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,TextInput,
  ImageBackground
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import me1 from "../assets/profile23.png"

const Profile = () =>{
    const renderProfileItem = (label, value) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{value}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Icon name="edit" size={16} color="#990000" />
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
          </View>
        );
      };
      const renderProfileItem1 = (label, value) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{value}</Text>
              <TouchableOpacity style={styles.editButton}>
              
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
          </View>
        );
      };
    
return<View style={styles.Container1}>

<View style={styles.Container2}>

<Avatar
        size="xlarge"
        rounded
       source={me1} 
        containerStyle={styles.avatar}
        avatarStyle={styles.avatarImage}
      />

</View>
<View style={styles.Container3}> 

      {renderProfileItem('NAME', 'Saam Fisher')}
      {renderProfileItem('AGE', '25')}
      {renderProfileItem('E-MAIL', 'samfisher@gmail.com')}
      {renderProfileItem1('PHONE NUMBER', '650034378')}
      {renderProfileItem1('SEX', 'Male')}
      {renderProfileItem1('REGION', 'South West')}
      {renderProfileItem1('CITY', 'Buea')}
      {renderProfileItem1('STAKEHOLDER STATUS', 'User')}
</View>

</View>

}



export default Profile;

const styles = StyleSheet.create({
Container1:{
    flex:1,
width:"100%",
backgroundColor:"red"
},

Container2:{
    flex:2,
    backgroundColor:"white",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    padding:0
},

Container3:{
    flex:4,
backgroundColor:"white",
paddingRight:40,
paddingLeft:20
},
container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  editButton: {
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
  },

  
  avatar: {
    borderWidth: 5, // Example border width
    borderColor: '#fff',
    width:250,
    height:250
   
  },
  avatarImage: {
    marginTop:0,
    borderRadius: 100, // Increase the radius to make it more rounded
    resizeMode: 'cover',
  },

})