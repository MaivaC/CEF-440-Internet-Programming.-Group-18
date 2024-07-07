import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TouchableOpacity ,Button} from 'react-native';
import me4 from "../../screens/admins/assets/Logo.png";

import me1 from "../../screens/Clientcitizen/assets/Buea1.png"
import me2 from "../../screens/Clientcitizen/assets/landslide.png"
import me3 from "../../screens/Clientcitizen/assets/thunder.png"




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
   <Image source={me4} style={{ width: 100, height: 100 }} />
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text}</Text>

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
    <View style={styles.container}>
      <ImageSlide image={images[currentIndex].source} text={images[currentIndex].text} />
    <TouchableOpacity style={{height:40,justifyContent:"center",marginTop:50}}><Text style={{color:"white"}} ></Text></TouchableOpacity>
    <Button title="CONTINUE" onPress={() => navigation.navigate('SignIn')} />
    <Image source={me4} style={{ width: 100, height: 100 ,marginTop:20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#990000',
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.8,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    marginTop: 40,
    fontSize: 36,
    color:"white",
    textAlign: 'center',
  },
  button:{
width:1000,
height:50,
backgroundColor:"blue",

  }
});

export default Avpp;
