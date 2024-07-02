import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [verificationStep, setVerificationStep] = useState("email"); // "email" or "code"

  const sendVerificationCode = async () => {
    const success = await sendVerificationCode(email);
    if (success) {
      setVerificationStep("code");
    } else {
      Alert.alert("Error", "Failed to send verification code.");
    }
  };

  const verifyCode = async () => {
    const success = await verifyCode(email, code);
    if (success) {
      const user = { email };
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } else {
      Alert.alert("Error", "Invalid verification code.");
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const removeLocalUser = async () => {
    await AsyncStorage.removeItem("@user");
    setUserInfo(null);
    setEmail("");
    setCode("");
    setVerificationStep("email");
  };

  const loadUserInfo = async () => {
    const user = await getLocalUser();
    if (user) {
      setUserInfo(user);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      {!userInfo ? (
        verificationStep === "email" ? (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Button title="Send Verification Code" onPress={sendVerificationCode} />
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
            />
            <Button title="Verify Code" onPress={verifyCode} />
          </View>
        )
      ) : (
        <View style={styles.card}>
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Button title="Remove Local Store" onPress={removeLocalUser} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
});
