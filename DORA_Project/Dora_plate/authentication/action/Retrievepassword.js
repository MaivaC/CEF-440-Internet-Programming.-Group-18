import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignupPage = () => {
  const [account, setAccount] = useState({
    myname: '',
    myphone: '',
    mypass: '',
    myaddress: '',
    mystatus: '',
    myemail: ''
  });

  const handleChange = (name, value) => {
    setAccount(prevAccount => ({
      ...prevAccount,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    Alert.alert('Account Created', `Name: ${account.myname}\nEmail: ${account.myemail}`);
    // Here you can add your logic to send the data to your backend server.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={account.myname}
        onChangeText={(value) => handleChange('myname', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={account.myphone}
        onChangeText={(value) => handleChange('myphone', value)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={account.mypass}
        onChangeText={(value) => handleChange('mypass', value)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={account.myaddress}
        onChangeText={(value) => handleChange('myaddress', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={account.mystatus}
        onChangeText={(value) => handleChange('mystatus', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={account.myemail}
        onChangeText={(value) => handleChange('myemail', value)}
        keyboardType="email-address"
      />
      
      <Button title="Create Account" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8
  }
});

export default SignupPage;
