import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import map from "../assets/map1.png"
import castle from "../assets/Castle.png"
import row1 from "../assets/row1.png"
import row2 from "../assets/row2.png"
import row3 from "../assets/row3.png"
const Chomepage = ({navigation}) => {
    return(
    <View style={styles.Container1}>

    <View style={styles.container2}>
    <Image source={map} alt="New Map" style={styles.image}/> 
    </View>
    <View style={styles.container1}><View style={styles.row}>
    <View style={styles.row2}><Text style={styles.Text2}>NearBy Shelters</Text><TouchableOpacity style={{marginLeft:80}}  onPress={() => navigation.navigate('Shelter')}><Text style={styles.Text3}>Show All</Text></TouchableOpacity></View>
    <View style={styles.row2}><TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>{'<'}3km</Text></TouchableOpacity>
    <TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>3-10km</Text></TouchableOpacity>
    <TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>{'>'}10km</Text></TouchableOpacity>
   </View> 
  
   <Image source={castle} alt="NewCastle" style={styles.image2}/>
    
    </View>

   </View>
   <View><View style={styles.row2}><Text style={styles.Text4}>Survival Guide</Text><TouchableOpacity style={{marginLeft:70}}  onPress={() => navigation.navigate('Survival')}><Text style={styles.Text3}>Show All</Text></TouchableOpacity></View></View><View style={styles.container1}>
  
<View style={styles.head}>  
 <Image source={row1} style={styles.image3} alt="row1"/>
    <Image source={row2} style={styles.image3} alt="rowr"/>
    <Image  source={row3} style={styles.image3} alt="row1"/>
    </View>
  
    </View>
    </View>

    )
}


const styles = StyleSheet.create({
    head:{
width:"100%",
flexDirection:"row",
marginTop:2,
paddingLeft:"0%"

    },
    
    shape:{
        width:70,
        height:30,
        backgroundColor:"#990000",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
        marginLeft:8,
        borderWidth:0,
        borderColor:"white"
    },
shapecolor:{
    color:"white",
  
},
    container1:{
height:"35%",
borderWidth:1,
borderRadius:20,
width:"100%",
backgroundColor:"white",
flexDirection:"row",
marginTop:10,
borderColor:"white"
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

        width:"105%",
        height:"70%",
        borderRadius:20,
    
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
borderColor:"white",
    },

    container3:{
        flex:1,
        backgroundColor:"white"
    },

    Container1: {

        borderColor:"white",
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
        fontWeight:"bold",
        marginLeft:10
      },

      Text4: {
        color: "black",
        fontSize:20,
        textAlign:"center",
        justifyContent:"center",
        fontWeight:"bold",
        marginLeft:54
      },
      Text3: {
        color: "#990000",
        fontSize:20,
     marginLeft:"39%",
        justifyContent:"center",
        fontWeight:"bold"
      },
  });

export default Chomepage