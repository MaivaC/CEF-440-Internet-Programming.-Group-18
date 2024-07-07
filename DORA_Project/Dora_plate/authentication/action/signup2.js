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

import { registerUser } from '../../services/apiservice';
import Logo from "../styles/loginstyle";


const Csignup2 = ({navigation}) => {
 

  const [visible, setVisble] = useState(true);
  const [isChecked, setIsChecked] = useState();

  const hashPassword = (Password) => {
  if (!Password) {
    throw new Error('Password is required');
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(Password, salt);
  return hash;
};
const hash = hashPassword;

  handleclick = () => {
    console.log("you have successfully registered");
  };
  handlePress = () => {
    setVisble(false);
  };


  const [formData, setFormData] = useState({
    Name:'',
    Password:'', 
    Email:'', 
    Phonenumber:'', 
    Age:'', 
    Address:'',
    CStatus :''
});

const handleChange = (name,value) => {


  setFormData({
        ...formData,
        [name]: value
    });
};
const Insert =()=>{
console.log("fetched the variables")
console.log("Your credentials are:",formData.Name,formData.Email,formData.Address)
}

const handleSubmit = async (e) => {
Insert()
    e.preventDefault();
    try {
        const response = await registerUser(formData);
        console.log(response);
        alert(response.message || response.error);
        () => navigation.navigate('SignIn')
    } catch (error) {
        alert('Registration failed!');
    }
};


  return (
    <View style={styles.Container1}>
    <Logo/>
     <View styles={styles.header2}><Text style={styles.Text}>Create an Account</Text>
<TextInput
        style={styles.TextInput}
        onChangeText={(value) => handleChange('Name', value)}
        value={formData.Name}
        placeholder="Name"
        required
      />
<TextInput
        style={styles.TextInput}

        onChangeText={(value) => handleChange('Email', value)}
        value={formData.Email}
        placeholder="E-mail"
        required
        keyboardType="email-address"
      />
<TextInput
        style={styles.TextInput}

        onChangeText={(value) => handleChange('Phonenumber', value)}
        value={formData.Phonenumber}
        placeholder="Phonenumber"
        keyboardType="phone-pad"
        required
      />
<TextInput
        style={styles.TextInput}
        onChangeText={(value) => handleChange('Address', value)}
        value={formData.Address}
        placeholder="Organisation"
        required
      /><TextInput
        style={styles.TextInput}
        onChangeText={(value) => handleChange('Age', value)}
        value={formData.Age}
        placeholder="Age"
        keyboardType="phone-pad"
        required
      /> 
      <TextInput
        style={styles.TextInput}

        onChangeText={(value) => handleChange('Password', value)}
        value={formData.Password}
        placeholder="Password"
        secureTextEntry
        required
      />
       <TextInput
        style={styles.TextInput}

        onChangeText={(value) => handleChange('Password', value)}
        value={formData.Password}
        placeholder="Confirm Password"
        required
      />
      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
      <Text style={styles.Text2}>Create Account</Text>
      </TouchableOpacity>
 </View> 
    </View>
  )
}

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

export default Csignup2;

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
