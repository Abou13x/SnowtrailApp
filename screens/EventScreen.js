import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const EventScreen = () => {
  return (
    <View style={styles.eventScreen}>
      <Text> Event Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  eventScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default EventScreen;
