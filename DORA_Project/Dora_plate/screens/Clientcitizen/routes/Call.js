import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const Call = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Brother</Text>
      <Avatar
        size="xlarge"
        rounded
        icon={{ name: 'user', type: 'font-awesome', color: 'black' }}
        containerStyle={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Call;
