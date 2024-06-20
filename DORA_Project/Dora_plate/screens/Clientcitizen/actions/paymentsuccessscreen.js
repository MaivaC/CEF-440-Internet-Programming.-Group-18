import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import picture from "../assets/success.png"
const PaymentSuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={picture } // Replace with your success icon URL
          style={styles.image}
        />
        <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>
        <Text style={styles.subTitle}>Thank you for your contributions</Text>
        <Text style={styles.message}>
          This contribution will be used to maintain the application and also to easy recovery efforts of affected communities
        </Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: '80%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#900',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    marginTop:60,
    backgroundColor: '#990000',
    paddingVertical: 10,
    paddingHorizontal: 20,

     justifyContent:"center",
    alignItems:"center"
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    width:200,
   textAlign:"center"
  },
});

export default PaymentSuccessScreen;
