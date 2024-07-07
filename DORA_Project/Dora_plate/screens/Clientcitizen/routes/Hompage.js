import react, { useState,useEffect,useRef } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  ScrollView,
  Animated,
   Easing
} from "react-native";
import map from "../assets/map1.png"
import castle from "../assets/Castle.png"
import row1 from "../assets/row1.png"
import row2 from "../assets/row2.png"
import row3 from "../assets/row3.png"
import TApp from "../../admins/displays/map";


import me1 from "../assets/Buea1.png"
import me2 from "../assets/landslide.png"
import me3 from "../assets/thunder.png"

const Images = [
  row1,row2,row3,me3 // Replace with your image paths
]

const Chomepage = ({navigation}) => {

  const [currentImages, setCurrentImages] = useState(Images);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Vibration animation
    const animate = () => {
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: -1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        animate();
      });
    };
    animate();

    // Change images after 2 minutes
    const imageChangeInterval = setInterval(() => {
      setCurrentImages(newImages);
    }, 2 * 720 * 1000);

    return () => clearInterval(imageChangeInterval);
  }, []);

  const animatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [-1, 1],
          outputRange: [-80, 80],
        }),
      },
    ],
  };






    return(
    <View style={styles.Container1}>

    <View style={styles.container2}>
<TApp/>
    
    </View>
    <View style={styles.container1}><View style={styles.row}>
    <View style={styles.row2}><Text style={styles.Text2}>NearBy Shelters</Text><TouchableOpacity style={{marginLeft:80}}  onPress={() => navigation.navigate('Shelter')}><Text style={styles.Text3}>Show All</Text></TouchableOpacity></View>
    <View style={styles.row2}><TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>{'<'}3km</Text></TouchableOpacity>
    <TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>3-10km</Text></TouchableOpacity>
    <TouchableOpacity style={styles.shape}><Text style={styles.shapecolor}>{'>'}10km</Text></TouchableOpacity>
   </View> 
  
<Avpp/>
    
    </View>

   </View>
   <View><View style={styles.row2}><Text style={styles.Text4}>Survival Guide</Text><TouchableOpacity style={{marginLeft:70}}  onPress={() => navigation.navigate('Survival')}><Text style={styles.Text3}>Show All</Text></TouchableOpacity></View></View><View style={styles.container1}>
  
<View style={styles.head}>  
{currentImages.map((image, index) => (
            <Animated.Image key={index} source={image} style={[styles.image3, animatedStyle]} alt={`row${index + 1}`} />
          ))}
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
      text: {
        marginTop: 40,
        fontSize: 36,
        color:"white",
        textAlign: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#990000',
      },
  });

export default Chomepage




const images = [
  {
    source: me1 , // Replace with actual image URLs
    text: 'Stay informed with real-time alerts during disasters.',
  },
  {
    source:  me2 ,
    text: 'Connect with the community and find lost items.',
  },
  {
    source:  me3 ,
    text: 'Access vital resources and emergency information.',
  },
];
const { width } = Dimensions.get('window');

const ImageSlide = ({ image, text }) => (
  <View style={styles.slide}>
    <Image source={image} style={styles.image2} />
 

  </View>
);

const Avpp = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
   
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View >
      <ImageSlide image={images[currentIndex].source} text={images[currentIndex].text} />
    <TouchableOpacity style={{height:40,justifyContent:"center",marginTop:50}}><Text style={{color:"white"}} ></Text></TouchableOpacity>
    <Button title="CONTINUE" onPress={() => navigation.navigate('SignIn')} />

    </View>
  );
};