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
import me4 from "../../screens/admins/assets/Logo.png";

const Logo =()=>{
    return(
<View>
<Image source={me4} style={{ width: 100, height: 100,marginBottom:80 }} />
    </View>
)
}

export default Logo;