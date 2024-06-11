import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Button, TextInput, View, FlatList, Text } from "react-native";

const MessagingScreen = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Array to store received messages
  useEffect(() => {
    const newSocket = io("http://localhost:3000"); // Replace with your server URL
    setSocket(newSocket);
    newSocket.on("connect", () => {
      console.log("Successfully connected to server!");
      // You can perform actions here after a successful connection
    });
    // Cleanup function to disconnect on unmount
    return () => newSocket.disconnect();
  }, []);

  const handleUsernameChange = (text) => setUsername(text);
  const handleJoin = () => {
    if (socket && username) {
      socket.emit("join", username);
      console.log("Message sent");
    } else {
      console.log("message not sent");
    }
  };
  const handletest = () => {
    const newSocket = io("http://localhost:3000"); // Replace with your server URL
    setSocket(newSocket);
    newSocket.on("connect", () => {
      console.log("Successfully connected to server!");
      // You can perform actions here after a successful connection
    });
    newSocket.on("error", (error) => {
      console.error("Error connecting to server:", error);
      // Handle connection errors here (e.g., display error message to user)
    });
  };

  const handleInputChange = (text) => setMessage(text);
  const handleSendMessage = () => {
    if (socket && message.trim()) {
      socket.emit("chat message", message);
      setMessage(""); // Clear message input field
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("chat message", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]); // Add message to messages array
      });
    }
  }, [socket, messages]); // Update messages state only when socket or messages change

  // Handle user leaving (optional, handled automatically by Socket.IO on disconnect)

  const renderMessage = ({ item }) => (
    <Text style={{ padding: 10, marginVertical: 5, borderBottomWidth: 1 }}>
      {item}
    </Text>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        placeholder="Enter Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <Button title="Join" onPress={handleJoin} />

      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        placeholder="Type your message"
        value={message}
        onChangeText={handleInputChange}
      />
      <Button title="Send" onPress={handleSendMessage} />

      {/* Display received messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item} // Unique key for each message
      />
      <Button title="Test me" onPress={handletest} />
      <Text>{message}</Text>
    </View>
  );
};

export default MessagingScreen;
