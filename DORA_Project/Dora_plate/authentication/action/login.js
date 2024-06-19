import { color } from "@rneui/themed/dist/config";
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


const Csignin = ({navigation}) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState();
  const [visible, setVisble] = useState(true);

  handleclick = () => {
    console.log("you have successfully registered");
  };
  handlePress = () => {
    setVisble(false);
  };

  return (
    <View style={styles.Container1}>
      
      <Text style={styles.Text}>SIGN IN</Text>
     

      <TextInput
        style={styles.TextInput}
        ref={name}
        value={email}
        placeholder="Enter your E-mail or Phone number"
      />
<TextInput
        style={styles.TextInput}
        ref={name}
        value={password}
        placeholder="Password"
      />
<TouchableOpacity><Text style={{marginLeft:"60%"}}>Forget Password?</Text></TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}><Text  style={styles.Text1}>Sign in</Text></TouchableOpacity>
      
      <TouchableOpacity>
       <Text>You dont have an account?
       <Text style={styles.Text3}>Create an account</Text> </Text> 
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    fontWeight: "bolder",
    justifyContent:"center"
  },
  
button: {
backgroundColor:"red",
 width:150,
padding:10,
alignContent:"center",
justifyContent:"center",
marginBottom:"10%",
marginTop:"10%"

  },
  TextInput: {

    color: "black",
    width: 300,

    marginBottom: 20,
    justifyContent: "center",
    borderRadius:10,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 1,
    padding:10,

  },
  Text: {
    fontSize:40,
    marginleft: 10,
    color: "black",
    fontWeight:"bold",
    padding:20
  },
  Text1: {
    marginleft: 10,
    color: "white",
    fontWeight:"bold",
    textAlign:"center"
 
  },
  Text3: {
 
    color: "#990000",
    fontWeight:"bold",
    textAlign:"center"
 
  },
  Textadjust: {
    marginLeft: "20%",
  },
  Button: {
    flex: 1,
    width: 100,
    height: 300,
    backgroundColor: "#3BFFF3",
  },
  image: {
    width: 410,
    height: 300,
  },
});

export default Csignin;
