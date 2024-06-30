import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Brother</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="call-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="videocam-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.sentMessage}>
            <Text style={styles.messageText}>Hey, have you seen the latest alert?</Text>
            <Text style={styles.messageTime}>6:30 PM</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.sentMessage}>
            <Text style={styles.messageText}>There's a severe earthquake warning for our area!</Text>
            <Text style={styles.messageTime}>6:30 PM</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageText}>Yeah, I just got it.</Text>
            <Text style={styles.messageTime}>6:35 PM</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageText}>It says the earthquake is expected to hit by tomorrow evening</Text>
            <Text style={styles.messageTime}>6:36 PM</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageText}>We need to start preparing.</Text>
            <Text style={styles.messageTime}>6:36 PM</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="white" />
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
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007aff',
    borderRadius: 25,
    padding: 10,
  },
});

export default MessageScreen;
