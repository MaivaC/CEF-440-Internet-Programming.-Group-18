import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import image from "../assets/circularmap.png"
import image2 from "../assets/Itenary.png"

const Itenary = () => {
    return(
    <View style={styles.container}>

   <View style={styles.Container1}><ImageBackground  style={styles.background} source={image}>
   <TouchableOpacity styles={styles.Circleshape}>
   <Text style={styles.fonts}>{'<'}</Text></TouchableOpacity></ImageBackground></View>
   <View style={styles.Container2}>
<Image source={image2} style={NewStyles.Image} alt="image2"  />
<Text style={NewStyles.Text1}>University of Buea Shelter</Text>
<Text style={NewStyles.Text2}>First aid Kits</Text>
<Text style={NewStyles.Text2}>Food supply</Text>
<Text style={NewStyles.Text2}>Pets are not allowed</Text>

   </View>
     <View style={styles.container2}><TouchableOpacity style={styles.back}><Text style={{color:"white",textAlign:"center"}}>Itenary</Text></TouchableOpacity></View>
   </View>



    )
}

 export default Itenary;

const NewStyles = StyleSheet.create({

Image:{
    width:"99%",
    height:"70%",
    padding:0,
    borderRadius:35
},
Text1:{
fontWeight:"bold",
fontSize:20
},
Text2:{
    fontSize:15
}


})











 const styles = StyleSheet.create({
    back:{

        backgroundColor:"blue",
        width:240,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },

Tablehead:{
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Distribute space between items
    padding: 10,
    backgroundColor: '#f0f0f0',

},
    container:{
flex:1,
marginTop:"10"

    },
    container2:{
 alignItems:"center",
    justifyContent:"center",
   
    height:"8%",  
    padding:0 
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
        height:"55%"
    },
    Container2:{
      
     backgroundColor:"white",
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
        padding:0,
        flexDirection:"row",
        marginTop:"1%",
        
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
    width:"100%",

},
row1:{
flexDirection:"row",
marginLeft:"35%"
},
icon:{

paddingBottom:"auto",
marginRight:10
},
col1: {
 // Flex property to control the width
    textAlign: 'center', // Center the text horizontally
    fontWeight: 'bold',
    marginHorizontal: 5, // Example styling
  },
  col2: {

    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  col3: {
alignSelf:"flex-end",
    textAlign: 'right',
    fontWeight: 'bold',
    marginLeft:100,
    marginHorizontal: 5,
  },


})