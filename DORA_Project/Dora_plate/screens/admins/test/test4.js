import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const Tpp = () => {
  const [showGif, setShowGif] = useState(false);

  const handleShowGif = () => {
    setShowGif(true);
    setTimeout(() => setShowGif(false), 3000); // Hide GIF after 3 seconds
  };

  return (
    <View style={styles.container}>
      <Button title="Show GIF" onPress={handleShowGif} />
      {showGif && (
        <FastImage
          style={styles.gif}
          source={{
            uri: 'https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default Tpp;
