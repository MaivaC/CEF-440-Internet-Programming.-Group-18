import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Process Payment</Text>
      <Text style={styles.label}>Enter Amount</Text>
      <View style={styles.amountContainer}>
        <TextInput
          style={styles.amountInput}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter amount"
        />
        <Text style={styles.currency}>FCFA</Text>
      </View>
      <Text style={styles.label}>Select Payment method</Text>
      <View style={styles.paymentMethods}>
        <Image source={require('./../assets/visa.png')} style={styles.paymentIcon} />
        <Image source={require('./../assets/mastercard.png')} style={styles.paymentIcon} />
        <Image source={require('./../assets/mtn.png')} style={styles.paymentIcon} />
        <Image source={require('./../assets/orange.png')} style={styles.paymentIcon} />
      </View>
      <Text style={styles.label1}>Enter Phone number or Card number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder=""
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    alignItems:"center",
  },
  label1: {
    fontSize: 16,
    alignItems:"center",
    marginTop:40
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#900',
    borderRadius: 5,
    marginBottom: 20,
  },
  amountInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  currency: {
    padding: 10,
    backgroundColor: '#eee',
    borderLeftWidth: 1,
    borderColor: '#900',
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  
  },
  paymentIcon: {
    width: 50,
    height:40,
    justifyContent:"center",


}

,
input:{
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#900',
    borderRadius: 5,
    height:"8%",
    marginBottom: 40,},
buttonText:{
 color:"#fff"
},
button:{
    backgroundColor:"#990000",
width:300,
height:"6%"
,
alignItems:"center",
justifyContent:"center"
}


})

    export default PaymentScreen;