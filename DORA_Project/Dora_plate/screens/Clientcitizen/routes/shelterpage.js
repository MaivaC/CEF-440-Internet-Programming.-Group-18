import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  ImageBackground
} from "react-native";
import image from "../assets/circularmap.png"
import row1 from "../assets/row4.png"
import row2 from "../assets/row5.png"
import row3 from "../assets/row6.png"
import Icon from 'react-native-vector-icons/MaterialIcons';


const Shelter = () => {
    return(
    <View style={styles.container}>

   <View style={styles.Container1}><ImageBackground  style={styles.background} source={image}>
   <TouchableOpacity styles={styles.Circleshape}>
   <Text style={styles.fonts}>{'<'}</Text></TouchableOpacity></ImageBackground></View>
   <View style={styles.Container2}><Text>Hi Welcome to the shelter page</Text>
<View style={styles.row}>
<Text style={styles.Text1}>Flooding  </Text>
  <View style={styles.row1}><Icon name="error" size={32} color="red" style={styles.icon}  /><Text style={styles.Text2}>Danger</Text></View></View>
  <Text>Buea,Cameroon</Text> 
  <View styles={styles.Tablehead}>

  <Text styles={styles.col1}>Time </Text>
  <Text  styles={styles.col2}>Speed </Text> 
   <Text  styles={styles.col3}>Radius</Text>

  </View>
  <View styles={styles.Tablecontent}></View>
  <View style={styles.container1}>
   
    <View style={styles.head}>  
     <Image source={row3} style={styles.image3} alt="row1"/>
        <Image source={row2} style={styles.image3} alt="rowr"/>
        <Image  source={row1} style={styles.image3} alt="row1"/>
        </View>
      
        </View>
   
   
   </View>
   
   </View>



    )
}

 export default Shelter;

 const styles = StyleSheet.create({

Tablehead:{
flexDirection:"row"

},
    container:{
flex:1,
marginTop:"10"

    },
    container1:{
        height:"80%",
        borderWidth:1,
        borderRadius:20,
        width:"100%",
        backgroundColor:"white",
        flexDirection:"row",
        marginTop:10,
        borderColor:"white",
        paddingBottom:0,
        paddingTop:100
      
            },
    Container1:{
        marginTop:0,
        backgroundColor:"blue",
        width:410,
        height:"60%"
    },
    Container2:{
      
     
        width:410,
        height:"40%"
    },
    background:{

        flex:1,
       

    },
    Circleshape:{
        backgroundColor: "rgba(1, 1, 1, 0.5)", 
   borderRadius:50,
      width:10,
      height:10


    },
    fonts:{
        fontSize:38,
        color:"black",
        marginLeft:"left",
        marginTop:10
     
      
    }
,
    image3:{

        width:"30%",
        height:"90%",
        borderRadius:20,
        marginLeft:14,
      
    },

    head:{
        width:"100%",
        flexDirection:"row",
        marginTop:"5%",
        paddingLeft:"0%"
        
            },
Text1:{
    color:"black",
    fontWeight:"bold",
    fontSize:30,
   
    
},
Text2:{
    color:"red",

    fontSize:20,
  alignSelf:"flex-end",
  marginBottom:13


},
row:{
    flexDirection:"row",
    width:"100%"
},
row1:{
flexDirection:"row",
marginLeft:"35%"
},
icon:{

paddingBottom:"auto",
marginRight:10
},
col1:{
textAlign:"left"

},
col2:{
textAlign:"center"
},
col3:{
textAlign:"right"
}


})