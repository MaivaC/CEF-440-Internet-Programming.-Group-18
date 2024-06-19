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



const Csignup = ({navigation}) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [age,setAge] = useState();
  const [visible, setVisble] = useState(true);
  const [isChecked, setIsChecked] = useState();

  handleclick = () => {
    console.log("you have successfully registered");
  };
  handlePress = () => {
    setVisble(false);
  };

  return (
    <View style={styles.Container1}>
   
         
     <View styles={styles.header2}><Text style={styles.Text}>Create an Account</Text>
 

      <TextInput
        style={styles.TextInput}
        ref={name}
        value={name}
        placeholder="Name"
      />
       <TextInput
        style={styles.TextInput}
        ref={age}
        value={age}
        placeholder="Age"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={username}
        placeholder="Phonenumber"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={password}
        placeholder="Password"
      />
       <TextInput
        style={styles.TextInput}
        ref={name}
        value={password}
        placeholder="Confirm Password"
      />
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('SignIn')}><Text style={styles.Text2}>Create Account</Text></TouchableOpacity>
     </View> 
     
    </View>
  );
};

const styles = StyleSheet.create({
  Container1: {
    flex: 3,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    fontWeight: "bolder",
    justifyContent:"center",
    alignContent:"center"
  },
  
  TextInput: {
    backgroundColor: "transparent",
    color: "black",
   padding:10,
   width:300,
  paddingHorizontal:0,
    borderRadius:10,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 1,
    textAlign:"center",
    justifyContent: "center",
  },
  Text: {
fontWeight:"bold",
   textAlign:"center",
   paddingBottom:20,
   fontSize:35

  },
  Button:{
backgroundColor:"#990000",
marginLeft:"14%",
padding:10,
width:200,

  },
  Text2:{color:"white",
alignContent:"center",
justifyContent:"center",
textAlign:"center"
  },
  header:{
 
marginBottom:2000,
paddingBottom:2000
  },
  header2:{
marginTop:"50%",
alignContent:"center",
justifyContent:"center"
  }
});

export default Csignup;

/*const Checkbox = ({ label, isChecked, onPress }) => {
  const checkmark = isChecked ? '☑' : '☐';

  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <Text style={styles.checkboxText}>{checkmark}</Text>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginRight: 10,
    fontSize: 20,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});*/
