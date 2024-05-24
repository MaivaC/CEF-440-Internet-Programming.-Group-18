import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import map from "../assets/map1.png"
import castle from "../assets/Castle.png"
import row1 from "../assets/row1.png"
import row2 from "../assets/row2.png"
import row3 from "../assets/row3.png"
const Chomepage = () => {
    return(
    <View style={styles.Container1}>

    <View style={styles.container2}>
    <Image source={map} alt="New Map" style={styles.image}/> 
    </View>
    <View style={styles.container1}><View style={styles.row}>
    <View style={styles.row2}><Text style={styles.Text2}>NearBy Shelters</Text><Text style={styles.Text3}>Show All</Text></View>
    <TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>3km</Text></TouchableOpacity>
    <Image source={castle} alt="New Map" style={styles.image2}/>
    
    </View>
   </View>
    <View style={styles.container1}>

     <Image source={row1} style={styles.image3} alt="row1"/>
    <Image source={row2} style={styles.image3} alt="rowr"/>
    <Image  source={row3} style={styles.image3} alt="row1"/>

   
    
    
    </View>
    </View>

    )
}


const styles = StyleSheet.create({
    shape:{
        width:70,
        height:30,
        backgroundColor:"red",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
shapecolor:{
    color:"white"
},
    container1:{

height:"35%",
borderWidth:1,
borderRadius:20,
width:"100%",
backgroundColor:"white",
flexDirection:"row",
marginLeft:5,
marginTop:10

    },
    container2:{
        justifyContent:"center",
        alignContent:"center",
        height:"35%",
        borderWidth:1,
        borderRadius:20,
        width:"100%",
        backgroundColor:"white"
        
            },
row:{

flexDirection:"column"

},
row2:{

    flexDirection:"row"
    
    },
 image:{
        width:"100%",
        height:"85%",
        borderRadius:20,
    },
    image2:{

        width:"130%",
        height:"90%",
        borderRadius:10,
    },
    image3:{

        width:"40%",
        height:"60%",
        borderRadius:20,
        marginLeft:15,
      
    },
    container2:{
height:"40%",
      padding:0,
        borderWidth:1,
        borderRadius:20,
        width:"100%",
 backgroundColor: "white",
justifyContent:"center",
    },

    container3:{
        flex:1,
        backgroundColor:"white"
    },

    Container1: {

      backgroundColor: "white",
      marginTop: 20,
      marginBottom: 120,
      alignItems: "center",
   alignContent:"center",
      fontFamily: "Arial",
      display: "flex",
      fontWeight: "bolder",
    },
    display:{backgroundColor:"green" },
    display1:{backgroundColor:"green"}, 
    display2:{backgroundColor:"blue"},
  Text: {
      color: "white",
      fontSize:60,
      textAlign:"center",
      justifyContent:"center"
    },
    Text1: {
        color: "white",
        fontSize:20,
        textAlign:"center",
        justifyContent:"center"
      },
   
      Text2: {
        color: "black",
        fontSize:20,
        textAlign:"center",
        justifyContent:"center",
        fontWeight:"bold"
      },
      Text3: {
        color: "red",
        fontSize:20,
     marginLeft:"39%",
        justifyContent:"center",
        fontWeight:"bold"
      },
  });

export default Chomepage