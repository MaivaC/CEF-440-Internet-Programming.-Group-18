import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export default function Aupp() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "71a21754-ede3-4477-bb63-4e4453d36cc4",
    androidClientId: "617262344437-rb1bqm3a09e6ju44p4stt0utfjc7a6pq.apps.googleusercontent.com",
    webClientId: "617262344437-oc3ivkrshkv52gs0jtlo9i3rro4354m8.apps.googleusercontent.com",
    // projectNameForProxy:"@robertkizdaro/resqclient",
    useProxy: false, // Disable proxy
    redirectUri: 'your-redirect-uri',
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const handleSignInWithGoogle = async () => {
    promptAsync();
  };

  const handleVerificationCodeSubmit = async () => {
    try {
      const response = await fetch(
        `https://oauth2.googleapis.com/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=authorization_code&code=${verificationCode}&redirect_uri=your-redirect-uri&client_id=your-client-id`,
        }
      );

      const tokenResponse = await response.json();
      const accessToken = tokenResponse.access_token;
      getUserInfo(accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {!userInfo ? (
        <View>
          <Text>Enter your email address:</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="example@example.com"
          />
          <Button
            title="Send verification code"
            onPress={async () => {
              try {
                const response = await fetch(
                  `https://oauth2.googleapis.com/v4/token`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `grant_type=urn:ietf:wg:oauth:2.0:oob&client_id=your-client-id&redirect_uri=your-redirect-uri&response_type=code&scope=openid%20email&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/rize&access_type=offline&prompt=select_account`,
                  }
                );

                const tokenResponse = await response.json();
                const verificationUrl = tokenResponse.verification_url;
                WebBrowser.openAuthSessionAsync(verificationUrl);
              } catch (error) {
                console.error(error);
              }
            }}
          />
          <Text>Enter the verification code:</Text>
          <TextInput
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
            placeholder="123456"
          />
          <Button
            title="Submit verification code"
            onPress={handleVerificationCodeSubmit}
          />
        </View>}