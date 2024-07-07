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
import { loginUser } from "../../services/apiservice";
import Logo from "../styles/loginstyle";


const Csignin = ({navigation}) => {


const [Email,setEmail] = useState()
const [Password,setPassword] = useState()
  const [visible, setVisble] = useState(true);

  handleclick = () => {
    console.log("you have successfully registered");
  };
  handlePress = () => {
    setVisble(false);
  };

  const [credentials, setCredentials] = useState({
    Email:'nasoa@gmail.com',
    Password:'robert'
});

const handleChange = (name,value) => {
    setCredentials({
        ...credentials,
        [name]: value
    });
};
const navi=()=>{
   navigation.navigate('Dashboard')
}

 console.log("The Email is",credentials.Email,"and the password is ",credentials.Password)
const handleSubmit = async (e) => {
  
    e.preventDefault();
    try {
        const response = await loginUser(credentials);
        console.log(response);
       
        if (response.accessToken) {
            alert('Login successful! Welcome to RESQ');
            navi()
            // Store token in local storage or state management
            localStorage.setItem('accessToken', response.accessToken);
            
            // Redirect to protected page if necessary
        } else {
            alert(response.error);
            console.log("hi")
        }
    } catch (error) {
       
    }
};


  return (
    <View style={styles.Container1}>
     <Text style={styles.Text}>SIGN IN</Text>

     <Logo/>
     
      <TextInput
        style={styles.TextInput}
        onChangeText={(value) => handleChange('Email', value)}
        value={credentials.Email}
        required
        placeholder="Enter your E-mail"
      />
<TextInput
        style={styles.TextInput}
        onChangeText={(value) => handleChange('Password', value)}
        value={credentials.Password}
        required
        placeholder="Password"
      />
<TouchableOpacity><Text style={{marginLeft:"50%"}}>Forget Password?</Text></TouchableOpacity><TouchableOpacity style={styles.button}  onPress={navi} ><Text  style={styles.Text1}>Sign in</Text></TouchableOpacity>
      <View style={{flexDirection:"row"}}><Text style={styles.Text4}>You dont have an account?</Text>
<TouchableOpacity onPress={() => navigation.navigate('swipe')} ><Text style={styles.Text3}> Create an account</Text></TouchableOpacity>
    <View>

     </View></View> 
     <Text style={styles.description}>Swipe right for  Emergency Agents</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    fontWeight:"bold"
,
marginTop:80,
   textAlign:"center",

  },
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
backgroundColor:"#990000",
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
    borderColor: '#990000',
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
 
    color: "red",
    fontWeight:"bold",
    textAlign:"center"
 
  },
  Text4: {
 


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
