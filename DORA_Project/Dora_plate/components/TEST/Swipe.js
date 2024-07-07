
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Csignin from '../../authentication/action/login';
import Csignup from '../../authentication/action/signUp';


const SWIPE_THRESHOLD = 100;

const SwipeComponent = ({ navigation }) => {
  const translateX = new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      if (translationX<SWIPE_THRESHOLD||translationX>SWIPE_THRESHOLD) {
        navigation.navigate('Signup2'); 
      }
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (

    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
   <Csignup/>
       

      </Animated.View>
    </PanGestureHandler> 

  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  arrow: {
    marginTop: 20,
  },
});

export default SwipeComponent;
