import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hey, have you seen the latest alert?', time: '6:30 PM', sender: 'me' },
    { id: '2', text: 'There’s a severe earthquake warning for our area!', time: '6:30 PM', sender: 'me' },
    { id: '3', text: 'Yeah, I just got it.', time: '6:35 PM', sender: 'other' },
    { id: '4', text: 'It says the earthquake is expected to hit by tomorrow evening', time: '6:36 PM', sender: 'other' },
    { id: '5', text: 'We need to start preparing.', time: '6:36 PM', sender: 'other' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.theirMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Brother</Text>
        <TouchableOpacity>
          <Icon name="call" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chat}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name="happy-outline" size={24} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity>
          <Icon name="mic-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chat: {
    flex: 1,
  },
  chatContainer: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5
  }})

  export default MessageScreen;