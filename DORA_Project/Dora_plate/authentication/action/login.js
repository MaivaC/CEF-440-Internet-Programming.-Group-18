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


const Csignin = () => {
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
      <Text style={styles.Text}>
        Please in the personal information details
      </Text>

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
<TouchableOpacity><Text>Forget Password?</Text></TouchableOpacity>
      <Text>You dont have an account? </Text>
      <TouchableOpacity>
        <Text style={styles.Text}>Create an account</Text>
      </TouchableOpacity>

      <Button title="Sign In" onPress={handleclick()} style={styles.Button} />
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
  Container2: {



    alignItems: "center",
    color: "white",
  },
  TextInput: {
    backgroundColor: "transparent",
    color: "black",
    width: "80%",
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
  },
  Text: {
    marginleft: 10,
    color: "green",
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
