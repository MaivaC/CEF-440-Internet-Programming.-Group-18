import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,TextInput,
  ImageBackground
} from "react-native";
import image from "../assets/circularmap.png"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Contacts =()=>{

return<View style={styles.Container}>
<View style={styles.Table}>
<Text style={styles.Text1}>Contacts on...</Text>
<TouchableOpacity style={styles.Button}><Text style={styles.Text}>Invite a contact</Text></TouchableOpacity></View>
<View>

<Text style={styles.Text}>Brother</Text>
<Text style={styles.Text}>Father</Text>
<Text style={styles.Text}>Mother</Text>

</View>
</View>

}



const styles = StyleSheet.create({

Container:{
    flex:1,
    margin:0,
marginTop:20,
width:"100%",

},
Table:{
flexDirection:"row"
},
Text:{
    textAlign:"left",
    fontSize:18
},
Text1:{
    textAlign:"left",
    fontSize:13,
    marginTop:20,

    marginLeft:0,
},
Text2:{
   
    fontSize:10,


},
Button:{
alignSelf:"flex-end",
padding:10,
    borderRadius:20,
    borderWidth:1,
    borderColor:"brown",
    marginRight:0,

}
})

export default Contacts;